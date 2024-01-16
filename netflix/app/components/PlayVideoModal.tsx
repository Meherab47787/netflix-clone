import { Dialog, DialogDescription, DialogHeader, DialogTitle, DialogContent } from "@/components/ui/dialog";

interface iAppProps {
    title: string;
    overview: string;
    youtubeUrl: string;
    state: boolean;
    changeState: any;
    relese: number;
    age: number;
    duration: number;
}

export default function PlayVideoModal({
                                        changeState, 
                                        overview, 
                                        state, 
                                        title, 
                                        youtubeUrl,
                                        relese,
                                        age,
                                        duration
                                        }:iAppProps) {
    return (
        <Dialog open={state} onOpenChange={() => changeState(!state)}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription className="line-clamp-3">{overview}</DialogDescription>
                    <div className="flex gap-x-2 items-center">
                        <p>{relese}</p>
                        <p className="border py-0.5 px-1 border-gray-200 rounded">{age}+</p>
                        <p>{duration}h</p>
                    </div>
                </DialogHeader>
                <iframe className="w-full" src={youtubeUrl} height={250}></iframe>
            </DialogContent>
        </Dialog>
    )
}