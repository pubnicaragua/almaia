/* types/youtube.d.ts */
export {} // hace que sea un módulo aislado

declare global {
  // Declaración mínima de los métodos que usas
  namespace YT {
    interface Player {
      loadPlaylist(opts: any): void
      nextVideo(): void
      previousVideo(): void
      getPlaylistIndex(): number
      getPlaylist(): any[]
      stopVideo(): void
      playVideo(): void
    }
  }

  interface Window {
    YT: {
      Player: new (id: string, opts: any) => YT.Player
    }
    onYouTubeIframeAPIReady: () => void
  }
}
