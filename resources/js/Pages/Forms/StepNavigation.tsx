import { Button } from "@/Components/ui/button";

export default function StepNavigation({ step, setStep, maxSteps, handleSubmit }: any) {
    return (
        <div className="fixed bottom-0 w-full p-4 bg-white flex justify-between shadow-md max-w-md">
            <Button
                type="button"
                disabled={step === 1}
                onClick={() => setStep(step - 1)}
                variant={"secondary"}
            >
                Prev
            </Button>
            {step === maxSteps ? (
                <Button
                    type="submit"
                    variant={"link"}
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            ) : (
                <Button
                    type="button"
                    onClick={() => setStep(step + 1)}
                >
                    Next
                </Button>
            )}
        </div>
    );
}
