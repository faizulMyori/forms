import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";

export default function CompanyDetails() {
    return (
        <div id="company-details">
            <div className="mb-4 font-bold">Company Details</div>
            <hr className="mb-4" />
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="cName">Name</Label>
                <Input id="cName" placeholder="Name" />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
                <Label htmlFor="cAddress">Address</Label>
                <Input id="cAddress" placeholder="Address" />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
                <Label htmlFor="cPhone">Phone</Label>
                <Input type="tel" id="cPhone" placeholder="Phone" />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Email" />
            </div>
        </div>
    );
}
