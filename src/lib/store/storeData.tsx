// src/store/useVlogStore.ts
import { RegisterApiData, RegisterVlogStore } from '@/types/type';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// Importa las interfaces extendidas

export const useVlogStore = create<RegisterVlogStore>()(
    persist(
        (set) => ({
            // Estado inicial con los tipos definidos
            vlogData: null,
            isLoading: false,
            error: null,

            // Acciones con tipado
            fetchVlogData: async () => {
                set({ isLoading: true, error: null });
                try {
                    const response = await fetch('/api/vlog');
                    if (!response.ok) {
                        throw new Error(`Error en el fetch: ${response.statusText}`);
                    }
                    const data: RegisterApiData = await response.json();
                    console.log(data);
                    set({ vlogData: data, isLoading: false });
                } catch (err: any) {
                    set({ error: err.message, isLoading: false });
                }
            },

            clearVlogData: () => {
                set({ vlogData: null });
            },
        }),
        {
            name: 'vlog-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);