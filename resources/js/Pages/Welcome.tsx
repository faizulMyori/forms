import { useState } from "react";
import { Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import CompanyDetails from "./Forms/CompanyDetails";
import PicDetails from "./Forms/PicDetails";
import StepNavigation from "./Forms/StepNavigation";
import Products from "./Forms/Products";
import Header from "./Forms/Header";
import MoreDetails from "./Forms/MoreDetails";
import Swal from "sweetalert2";

export default function Home() {
    const [step, setStep] = useState(1);
    const maxSteps = 4;

    const handleSubmit = () => {
        const swalWithBootstrapButtons = Swal.mixin({});
        swalWithBootstrapButtons
            .fire({
                title: "Are you sure?",
                text: "Enquiry will be sent to our team.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, send it!",
                cancelButtonText: "No, cancel!",
                reverseButtons: true,
            })
            .then((result) => {
                if (result.isConfirmed) {
                    swalWithBootstrapButtons.fire({
                        title: "Success!",
                        text: "Your submission was successful.",
                        icon: "success",
                    });

                    setStep(1);
                } else if (
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire({
                        title: "Canceled!",
                        text: "Your submission is canceled.",
                        icon: "error",
                    });
                }
            });
    };

    return (
        <div className="min-h-screen h-screen flex justify-center items-center bg-gray-100">
            <div className="relative w-full max-w-md bg-white shadow-lg rounded-lg flex flex-col h-full">
                <Header />
                <div className="flex-grow overflow-auto pb-16 m-4">
                    <form className="w-full">
                        {step === 1 && <CompanyDetails />}
                        {step === 2 && <PicDetails />}
                        {step === 3 && <Products />}
                        {step === 4 && <MoreDetails />}
                    </form>
                </div>
                <div className="sticky bottom-0 w-full">
                    <StepNavigation
                        step={step}
                        setStep={setStep}
                        maxSteps={maxSteps}
                        handleSubmit={handleSubmit}
                    />
                </div>
            </div>
        </div>
    );
}
