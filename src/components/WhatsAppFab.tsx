import { getWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";

type WhatsAppFabProps = {
  className?: string;
};

export function WhatsAppFab({ className }: WhatsAppFabProps) {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir pelo WhatsApp"
      className={cn(
        "fixed bottom-5 right-5 z-50",
        "inline-flex h-14 w-14 items-center justify-center rounded-full",
        "bg-gold text-ink shadow-lg shadow-black/10",
        "ring-1 ring-border hover:bg-gold/90",
        "transition-colors duration-300 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      {/* Ícone simples (sem dependência). */}
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="currentColor"
      >
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.5.05.17 5.38.13 11.95c-.01 2.1.54 4.15 1.6 5.95L0 24l6.29-1.65a11.9 11.9 0 0 0 5.74 1.46h.05c6.56-.04 11.9-5.37 11.92-11.94.01-3.19-1.23-6.18-3.48-8.39Zm-8.45 18.3h-.04a9.86 9.86 0 0 1-5.02-1.37l-.36-.22-3.73.98 1-3.64-.24-.37a9.86 9.86 0 0 1-1.52-5.27C2.18 6.5 6.55 2.15 11.98 2.12a9.84 9.84 0 0 1 6.99 2.89 9.83 9.83 0 0 1 2.89 6.99c-.03 5.43-4.4 9.79-9.79 9.78Zm5.66-7.74c-.31-.15-1.85-.91-2.14-1.01-.29-.11-.5-.15-.71.15-.21.31-.82 1.01-1.01 1.22-.19.21-.37.23-.68.08-.31-.15-1.31-.48-2.5-1.53-.92-.82-1.55-1.83-1.73-2.14-.18-.31-.02-.48.13-.63.14-.14.31-.37.46-.55.15-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.15-.71-1.71-.97-2.34-.26-.62-.52-.54-.71-.55h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63 0 1.55 1.13 3.05 1.29 3.26.16.21 2.22 3.39 5.37 4.76.75.32 1.33.51 1.79.65.75.24 1.43.21 1.97.13.6-.09 1.85-.76 2.11-1.49.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.6-.36Z" />
      </svg>
    </a>
  );
}


