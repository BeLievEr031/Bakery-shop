import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import faqQuestionData from "../../localdata/faqQuestionData.json"
import Question from './components/Question'

function FAQ() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <section className="text-gray-700 select-none">
                <div className="container px-5 pt-24 mx-auto">
                    <div className="text-center mb-14">
                        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                            Frequently Asked Question
                        </h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                            The most common questions about how our business works and what
                            can do for you.
                        </p>
                    </div>
                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        {/* @ divide the faq question array in two parts */}
                        <div className="w-full lg:w-1/2 px-4">
                            {
                                faqQuestionData.map((item, index) => {
                                    return index < faqQuestionData.length / 2 && <Question question={item.question} answer={item.answer} />
                                })
                            }
                        </div>
                        <div className="w-full lg:w-1/2 px-4">
                            {
                                faqQuestionData.map((item, index) => {
                                    return index >= faqQuestionData.length / 2 && <Question question={item.question} answer={item.answer} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FAQ