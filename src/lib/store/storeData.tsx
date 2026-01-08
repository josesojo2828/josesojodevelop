/* eslint-disable @typescript-eslint/no-explicit-any */

// src/store/useVlogStore.ts
import { OBJ_DATA } from '@/data/dataset';
import { RegisterApiData, RegisterVlogStore } from '@/types/type';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// Importa las interfaces extendidas

export const useVlogStore = create<RegisterVlogStore>()(
    persist(
        (set) => ({
            // Estado inicial con los tipos definidos
            vlogData: OBJ_DATA,
            isLoading: false,
            error: null,

            // Acciones con tipado
            // fetchVlogData: async () => {
            //     set({ isLoading: true, error: null });
            //     try {
            //         const response = await fetch('/api/vlog');
            //         if (!response.ok) {
            //             throw new Error(`Error en el fetch: ${response.statusText}`);
            //         }
            //         const data: RegisterApiData = OBJ_DATA;
            //         console.log(data);
            //         set({ vlogData: data, isLoading: false });
            //     } catch (err: any) {
            //         set({ error: err.message, isLoading: false });
            //     }
            // },

            // clearVlogData: () => {
            //     return null;
            //     set({ vlogData: null });
            // },
        }),
        {
            name: 'vlog-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);