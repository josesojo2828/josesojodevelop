// Define la estructura de los detalles del token
export interface TokenDetails {
  modality: string;
  tokenCount: number;
}

// Define la estructura de los metadatos de uso
export interface UsageMetadata {
  promptTokenCount: number;
  candidatesTokenCount: number;
  totalTokenCount: number;
  promptTokensDetails: TokenDetails[];
  candidatesTokensDetails: TokenDetails[];
}

// Define la estructura de las partes del contenido
export interface Part {
  text: string;
}

// Define la estructura del contenido
export interface Content {
  parts: Part[];
  role: string;
}

// Define la estructura de un candidato
export interface Candidate {
  context: {
    content: Content;
    finishReason: string;
    avgLogprobs?: number; // avgLogprobs es opcional
  }
}

// Define la interfaz principal para la respuesta completa de la API
export interface ApiResponse {
  candidates: Candidate[];
  usageMetadata: UsageMetadata;
  modelVersion: string;
  responseId: string;
}