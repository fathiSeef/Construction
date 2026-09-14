import React from 'react'

function WhatsappBtn() {
    return (
        <div>
            <>
                {/* WHATSAPP CONCIERGE FLOATING BUTTON */}
                <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
                    <a
                        href="https://wa.me/94771234567?text=Hello%20A%26Y%20Consolidated,%20I%20would%20like%20to%20inquire%20about%20the%20residences."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 sm:gap-3 rounded-full border border-[rgba(233,195,73,0.5)] bg-[#1c212d] px-3.5 sm:px-5 py-2.5 sm:py-3 text-[10.5px] sm:text-[12px] font-bold tracking-[1.2px] sm:tracking-[1.5px] text-[#e0e2ec] shadow-[0_8px_25px_rgba(0,0,0,0.6)] hover:border-[#e9c349] hover:bg-[#252c3c] hover:shadow-[0_8px_30px_rgba(233,195,73,0.3)] transition-all transform hover:-translate-y-1"
                    >
                        <img
                            src="https://www.figma.com/api/mcp/asset/4a1fbec6-de0f-4e5e-937f-9515b1ab459c.svg"
                            alt="WhatsApp"
                            className="h-4 w-4 sm:h-5 sm:w-5"
                        />
                        <span className="hidden xs:inline">WhatsApp Concierge</span>
                    </a>
                </div>
            </>

        </div>
    )
}

export default WhatsappBtn