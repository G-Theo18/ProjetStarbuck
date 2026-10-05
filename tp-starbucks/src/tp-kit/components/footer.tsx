import { FOOTER_SECTION_DATA as sections } from "@/tp-kit/data/footer-sections.data";
import { StarbucksLogo } from "@/tp-kit/components/starbucks-logo";

/**
 * Le footer du site
 */
export function Footer() {
  return (
    <footer className="bg-brand-600 pb-25 text-white relative overflow-hidden">
      <div className="text-center lg:text-left text-xl lg:text-3xl uppercase font-bold tracking-widest container mx-auto p-8">
        Starbucks
      </div>

      <StarbucksLogo
        monochrome
        className="opacity-[0.05] absolute left-0 top-8 lg:top-1/2 lg:-translate-y-1/2 -translate-x-1/2 select-none pointer-events-none"
        size={800}
      />

      <div className="p-8 bg-brand">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 container mx-auto">
          {/* Col #1 */}
          <div className="hidden lg:block"></div>

          {/* Col #2 */}
          {sections.map((col, colKey) => (
            <div key={colKey} className="space-y-12">
              {col.map((section, sectionKey) => (
                <div key={sectionKey}>
                  <h2 className="font-medium text-2xl tracking-wide mb-4">
                    {section.heading}
                  </h2>
                  <ul className="space-y-2 text-sm">
                    {section.items.map((item, key) => (
                      <li key={key} className="text-white/50 hover:text-white transition-colors cursor-pointer">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

