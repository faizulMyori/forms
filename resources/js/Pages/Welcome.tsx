import { useState } from "react";
import { Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import CompanyDetails from "./Forms/CompanyDetails";
import PicDetails from "./Forms/PicDetails";
import StepNavigation from "./Forms/StepNavigation";

export default function Home() {
    const [step, setStep] = useState(1);
    const maxSteps = 2;

    return (
        <GuestLayout>
            <Head title="Welcome" />

            <form>
                {step === 1 && <CompanyDetails />}
                {step === 2 && <PicDetails />}

                <StepNavigation step={step} setStep={setStep} maxSteps={maxSteps} />
            </form>
        </GuestLayout>
    );
}