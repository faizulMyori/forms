import { Button } from "@/Components/ui/button";

export default function StepNavigation({ step, setStep, maxSteps }: any) {
    return (
        <div className="mt-4 flex justify-between">
            <Button
                type="button"
                disabled={step === 1}
                onClick={() => setStep(step - 1)}
                variant={"secondary"}
            >
                Prev
            </Button>
            <Button
                type="button"
                disabled={step === maxSteps}
                onClick={() => setStep(step + 1)}
            >
                Next
            </Button>
        </div>
    );
}
