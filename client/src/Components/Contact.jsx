import { FaLongArrowAltRight } from "react-icons/fa";


const ContactForm = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-gray-300 text-gray-800 gap-8 md:gap-14 min-h-screen px-8 py-10 relative">
            <div className="flex flex-col gap-4">
                {/* Logo */}
                <div className="justify-cent items-center text-center">
                    <img
                        className=""
                        src="/Images/logo.svg"
                        alt="Logo"
                    />
                </div>
        
                {/* Headline & Title */}
                <div>
                    <h2 className="text-xl font-semibold mt-4">Want to talk about a project or idea?</h2>
                    <h3 className="text-2xl font-bold mt-2">Let's do this</h3>
                </div>
        
                {/* Form Switcher */}
                <div className="mt-6">
                    <div className="flex justify-center items-center space-x-4">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Start a Project</button>
                        <button className="px-4 py-2 bg-gray-300 rounded-md">Say Hello</button>
                    </div>
                </div>
            </div>
    
            {/* Form */}
            <form className="w-full max-w-4xl mx-auto p-6  ">
                <div  className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className=" flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row gap-2">
                            <div className="flex flex-col ">
                                <label htmlFor="fn1" className="text-left font-medium">First Name</label>
                                <input id="fn1" name="FirstName" type="text" maxLength="255" required
                                className="w-full bg-white p-2" />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="ln1" className="text-left font-medium">Last Name</label>
                                <input id="ln1" name="LastName" type="text" maxLength="255" required
                                className="w-full p-2  bg-white" />
                            </div>
                        </div>

                        <div className="flex flex-col ">
                            <label htmlFor="ea1" className="text-left font-medium">Email Address</label>
                            <input id="ea1" name="EmailAddress" type="email" pattern=".*@.*\.[a-z]{2,3}" 
                            data-pattern-mismatch="Invalid email format" maxLength="255" required
                            className="w-full p-2 bg-white" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="p1" className="text-left font-medium">Phone</label>
                            <input id="p1" name="Phone" type="tel" required
                            className="w-full p-2  bg-white" />
                        </div>

                        <div className="flex flex-col ">
                            <label htmlFor="o1" className="text-left font-medium">Organization</label>
                            <input id="o1" name="Organization" type="text" maxLength="255" required
                            className="w-full p-2 bg-white" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="rfp1" className="text-left font-medium">RFP or Documentation (20MB)</label>
                            <input id="rfp1" name="RFP" type="file"
                            className="w-full p-2  bg-white" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="b1" className="text-left font-medium">Budget</label>
                            <input id="b1" name="Budget" type="text" maxLength="255"
                            className="w-full p-2  bg-white" />
                        </div>

                        <div className="flex flex-col ">
                            <label htmlFor="s1" className="text-left font-medium">What color is the sky?</label>
                            <input id="s1" name="SecurityAnswer" type="text" pattern="[Bb][Ll][Uu][Ee]"
                            data-pattern-mismatch="Just type 'blue', it's for security" maxLength="255" required
                            className="w-full p-2   bg-white" />
                        </div>
                    </div>

                    <div className="mt-6 text-left bg-white">
                        <label htmlFor="m1" className="text-left font-medium">Message or Project Description</label>
                        <textarea
                            id="m1"
                            name="Message"
                            placeholder="Tell us more about your project..."
                            className="w-full p-2 "
                        ></textarea>
                    </div>


                   
                </div>

                <button type="submit" className="w-full flex justify-center  border-b-green-700 text-white py-2 mt-6">
                    Submit <FaLongArrowAltRight className="mt-1 mx-2" />
                    {/* <div className="w-[32px] h-[2px] bg-green-700"></div> */}
                </button>
            </form>
        </div>
    );
};
  
export default ContactForm;
  