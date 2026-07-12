import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const WHATSAPP_URL = "https://wa.link/26glqx";
  const TELEGRAM_URL = "https://t.me/RW_Trade_Guides";

  return (
    <div className="min-h-screen bg-[#F6F3EC] flex justify-center items-start py-0 sm:py-16 px-0 sm:px-4 font-[Inter]">
      <div className="w-full max-w-md bg-[#FBF9F4] sm:rounded-sm overflow-hidden min-h-screen sm:min-h-0 shadow-[0_1px_2px_rgba(28,43,40,0.06)] sm:border sm:border-[#1C2B28]/10 relative">

        {/* subtle top rule, ledger-style */}
        <div className="h-[3px] w-full bg-[#1C2B28]" />

        {/* Masthead */}
        <div className="px-8 pt-10 pb-6 text-center border-b border-[#1C2B28]/12">
          <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-5 ring-1 ring-[#1C2B28]/15 relative bg-[#E9E4D8]">
            <Image
              src="/profile.jpg"
              alt="The Retired Wealthy Guides"
              fill
              className="object-cover grayscale-[15%]"
            />
          </div>

          <p className="text-[10px] tracking-[0.25em] uppercase text-[#8A8478] mb-3 font-medium">
            Est. Guides &middot; Reader-Supported
          </p>

          <h1 className="font-[Fraunces] text-[2rem] leading-[1.1] font-semibold text-[#1C2B28] mb-1 relative inline-block">
            The Retired Wealthy Guides
            <svg
              className="absolute left-0 -bottom-2 w-full"
              height="6"
              viewBox="0 0 200 6"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M1 4.2C40 1.5 80 1 120 3.3C150 5 175 2.6 199 3.8"
                stroke="#B08D57"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </h1>

          <p className="text-[#5C7A6E] text-sm mt-4 font-medium">
            Plain-language market notes for people investing their own retirement
          </p>
        </div>

        {/* Body */}
        <div className="px-8 pt-8 pb-10">
          <p className="text-[#1C2B28]/80 text-[15px] leading-relaxed mb-8">
            We publish weekly reading on markets and portfolio thinking &mdash;
            written for people managing their own savings, not day-trading
            terminals. To get the notes, reach out on either channel below.
          </p>

          {/* Ledger-style contact block */}
          <div className="mb-8 border border-[#1C2B28]/15 rounded-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#1C2B28]/12">
              <span className="text-xs uppercase tracking-wider text-[#8A8478] font-semibold">WhatsApp</span>
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1C2B28] text-sm font-medium hover:text-[#5C7A6E] underline decoration-[#B08D57]/50 underline-offset-4 truncate max-w-[220px]"
              >
                wa.link/26glqx
              </Link>
            </div>
            <div className="flex items-center justify-between px-5 py-3.5">
              <span className="text-xs uppercase tracking-wider text-[#8A8478] font-semibold">Telegram</span>
              <Link
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1C2B28] text-sm font-medium hover:text-[#5C7A6E] underline decoration-[#B08D57]/50 underline-offset-4 truncate max-w-[220px]"
              >
                t.me/RW_Trade_Guides
              </Link>
            </div>
          </div>

          {/* CTAs — stamped ledger entries */}
          <div className="space-y-3">
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between w-full bg-[#1C2B28] hover:bg-[#16211E] text-[#F6F3EC] py-4 px-5 rounded-sm font-medium transition-colors duration-200"
            >
              <div className="flex items-center gap-3">
                <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.4 0 11.95 0c3.176.001 6.163 1.24 8.404 3.485 2.242 2.246 3.476 5.237 3.475 8.417-.004 6.557-5.338 11.907-11.893 11.907-2.003-.001-3.973-.507-5.731-1.464L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.528 2.028 14.066.999 11.945 1c-5.443 0-9.87 4.371-9.874 9.799-.001 1.745.474 3.447 1.373 4.936l-.99 3.616 3.692-.957z"/>
                </svg>
                <span className="text-[15px]">Message on WhatsApp</span>
              </div>
              <span className="text-base font-light text-[#B08D57] transition-transform duration-200 group-hover:translate-x-0.5">&rarr;</span>
            </Link>

            <Link
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between w-full bg-transparent hover:bg-[#1C2B28]/5 text-[#1C2B28] py-4 px-5 rounded-sm font-medium border border-[#1C2B28]/25 transition-colors duration-200"
            >
              <div className="flex items-center gap-3">
                <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                  <path d="M11.944 0C5.344 0 0 5.344 0 11.944c0 5.622 3.88 10.331 9.133 11.594.46.084.629-.2.629-.444 0-.218-.008-.794-.012-1.56-3.32.721-4.02-1.6-4.02-1.6-.543-1.38-1.327-1.748-1.327-1.748-1.084-.741.082-.726.082-.726 1.199.084 1.83 1.232 1.83 1.232 1.065 1.825 2.794 1.298 3.475.992.108-.772.417-1.298.759-1.597-2.65-.301-5.437-1.325-5.437-5.9 0-1.303.466-2.368 1.23-3.103-.123-.302-.533-1.516.117-3.06 0 0 1.002-.321 3.282 1.224a11.442 11.442 0 016.008 0c2.277-1.545 3.277-1.224 3.277-1.224.653 1.544.243 2.758.12 3.06.767.735 1.227 1.8 1.227 3.103 0 4.586-2.792 5.596-5.449 5.891.428.37.812 1.101.812 2.219 0 1.603-.015 2.895-.015 3.288 0 .247.167.533.634.442C20.125 22.271 24 17.564 24 11.944 24 5.344 18.656 0 11.944 0z"/>
                </svg>
                <span className="text-[15px]">Message on Telegram</span>
              </div>
              <span className="text-base font-light text-[#5C7A6E] transition-transform duration-200 group-hover:translate-x-0.5">&rarr;</span>
            </Link>
          </div>

          {/* Disclaimer — quiet, honest, in the ledger's own voice */}
          <p className="text-[11px] leading-relaxed text-[#8A8478] mt-8 pt-6 border-t border-[#1C2B28]/10">
            Educational content only, not financial advice. Markets carry
            risk, including loss of principal. Past results don&apos;t
            guarantee future ones &mdash; make your own decisions or consult
            a licensed advisor.
          </p>
        </div>
      </div>
    </div>
  );
}
