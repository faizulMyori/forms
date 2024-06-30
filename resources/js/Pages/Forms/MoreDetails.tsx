import { Checkbox } from "@/Components/ui/checkbox";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/Components/ui/radio-group";

export default function MoreDetails() {
    const items = [
        {
            label: "Pharmaceutical",
            id: 1,
        },
        {
            label: "Automotive",
            id: 2,
        },
        {
            label: "Food & Beverages",
            id: 3,
        },
        {
            label: "Cosmetic",
            id: 4,
        },
        {
            label: "Other",
            id: 5,
        },
    ];

    return (
        <div id="company-details">
            <div className="mb-4 font-bold">More Details</div>
            <hr className="mb-4" />
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="cProduct">Company's Product</Label>
                <Input id="cProduct" placeholder="Company's Product" />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
                <Label htmlFor="cProduct" className="mb-4">
                    Select Industry:
                </Label>
                <RadioGroup defaultValue="1">
                    {items.map((item, index) => (
                        <div key={index} className="flex items-center mb-4">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                    value={item.id.toString()}
                                    id={item.id.toString()}
                                />
                                <Label htmlFor={item.label}>{item.label}</Label>
                            </div>
                        </div>
                    ))}
                </RadioGroup>
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
                <Label htmlFor="remarks">Remarks</Label>
                <Textarea id="remarks" placeholder="Remarks" />
            </div>
        </div>
    );
}
