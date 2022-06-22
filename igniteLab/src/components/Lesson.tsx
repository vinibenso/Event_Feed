import { CheckCircle, Lock } from "phosphor-react"
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: "Live" | "Class";
}

export function Lesson(props: LessonProps) {

    const isLessonAvailable = isPast(props.availableAt);
    const availableDateFormatted = format(props.availableAt, "EEEE' * 'd' de 'MMMM' * 'k'h'mm' ", {locale: ptBR,})


    return (
        <a href="#">
            <span className="text-gray-300">
                {availableDateFormatted}
            </span>

            <div className="rounded border border-gray-500 p-4 mt-2">
                <header className="flex itens-center justify-between">
                    {isLessonAvailable ? (

                        <span className="text-s text-blue-500 font-medium flex items-center gap-2" >
                            <CheckCircle size={20} />
                            Conteúdo liberado
                        </span>

                    ) : (

                        <span className="text-s text-orange-500 font-medium flex items-center gap-2" >
                            <Lock size={20} />
                            Em breve
                        </span>

                    )}


                    <span className="text-sx rounded py-[0.125rem] px-2 text-white border-green-300 border font-bold" >
                        {props.type === 'Live' ? 'Ao Vivo' : 'Aula Pratica'}
                    </span>

                </header>

                <strong className="text-gray-200 mt-5 block">
                    {props.title}
                </strong>


            </div>
        </a>
    )
}