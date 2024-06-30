import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";

export default function CompanyDetails() {
    return (
        <div id="company-details">
            <h4 className="mb-4">Company Details</h4>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="cName">Company Name</Label>
                <Input id="cName" placeholder="Company Name" />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
                <Label htmlFor="cAddress">Company Address</Label>
                <Input id="cAddress" placeholder="Company Address" />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
                <Label htmlFor="cPhone">Company Phone</Label>
                <Input type="tel" id="cPhone" placeholder="Company Phone" />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
                <Label htmlFor="cFax">Company Fax</Label>
                <Input type="tel" id="cFax" placeholder="Company Fax" />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Email" />
            </div>
        </div>
    );
}
