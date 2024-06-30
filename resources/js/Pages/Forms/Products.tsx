import { Checkbox } from "@/Components/ui/checkbox";

export default function Products() {
    const items = [
        "Solo 2 Side Servo Ecam (SOLO-2SL-20SV-BW)",
        "Solo Compact Side labelling wrap-around (SOLO-CP-SL-12SP-WR)",
        "Solo Compact Top labelling (SOLO-CP-TL-12SP)",
        "Solo Compact Vertical Pneumatic Wrap-around labelling (SOLO-CP-SL-12SP-PWR)",
        "Solo Compact Top/Side Applicator (SOLO-CP-ATT-12SP)",
        "Solo Semi Auto Labelling Machine",
        "Herma Applicator",
        "Label Printing Service",
    ];
    return (
        <div id="products">
            <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
                <div className="mb-4 font-bold">Interests</div>
                <hr className="mb-4" />
                {items.map((item, index) => (
                    <div key={index} className="flex items-center mb-4">
                        <Checkbox id={item} />
                        <label
                            htmlFor={item}
                            className="ml-2 text-sm font-medium leading-none"
                        >
                            {item}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}
