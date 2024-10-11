import Question from "./ui/Question"

export default function Questions(){
    return(
        <div className="space-y-16 my-40">
            <div>
                <h1 className="text-white text-center text-3xl lg:text-4xl font-bold">Frequently asked questions</h1>
            </div>
            <Question/>

            <div className="flex justify-center">
                <button className="bg-[#7300FF] rounded-tr-xl rounded-bl-xl text-white px-3 py-2">Ask Question</button>
            </div>
        </div>
    )
}