import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";

export default function PicDetails() {
    return (
        <div id="pic-details">
            <h4 className="mb-4">PIC Details</h4>

            <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
                <Label htmlFor="pic">Person In Charge</Label>
                <Input id="pic" placeholder="Person In Charge" />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
                <Label htmlFor="position">Position</Label>
                <Input id="position" placeholder="Position" />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
                <Label htmlFor="hp">H/P No.</Label>
                <Input type="tel" id="hp" placeholder="H/P No." />
            </div>
        </div>
    );
}
