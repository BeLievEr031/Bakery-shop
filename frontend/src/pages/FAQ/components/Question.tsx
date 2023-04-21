import React from 'react'

function Question({ question, answer }: IQuestionProp) {
    return (
        <div>
            <details className="mb-4 cursor-pointer">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    {question}
                </summary>

                <span className='pl-4'>
                    {answer}
                </span>
            </details>
        </div>
    )
}

export default Question