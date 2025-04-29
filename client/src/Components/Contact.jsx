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
                <div className="text-center justify-center items-center space-y-9">
                    <h2 className="text-xl font-semibold mt-4">Want to talk about a project or idea?</h2>
                    <h3 className="text-2xl md:text-7xl font-bold mt-2">Let's do this</h3>
                </div>
        
                {/* Form Switcher */}
                <div className="mt-6">
                    <div className="flex justify-center items-center space-x-4">
                        <p>I want to:</p>
                        <p className="px-4 py-2 text-red-500 rounded-md">Start a Project</p>
                        <p className="px-4 py-2 rounded-md">Say Hello</p>
                    </div>
                </div>
            </div>
    
            {/* Form */}
            <form className="w-full max-w-6xl mx-auto p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-4">
                    <div className="w-full flex flex-col md:flex-row gap-4 md:gap-2">
                        {/* First Name */}
                        <div className="relative flex-1">
                            <input
                            id="fn1"
                            name="FirstName"
                            type="text"
                            maxLength="255"
                            required
                            className="peer w-full bg-white p-2 pt-6 text-gray-900 focus:outline-none"
                            />
                            <label
                            htmlFor="fn1"
                            className="absolute text-gray-500 top-2 left-2 text-base transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-gray-900 peer-focus:text-sm"
                            >
                            First Name
                            </label>
                        </div>

                        {/* Last Name */}
                        <div className="relative flex-1">
                            <input
                            id="ln1"
                            name="LastName"
                            type="text"
                            maxLength="255"
                            required
                            className="peer w-full bg-white p-2 pt-6 text-gray-900 focus:outline-none"
                            />
                            <label
                            htmlFor="ln1"
                            className="absolute text-gray-500 top-2 left-2 text-base transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-gray-900 peer-focus:text-sm"
                            >
                            Last Name
                            </label>
                        </div>
                        </div>

   
                        {/* Email Address */}
                        <div className="relative">
                            <input
                            id="ea1"
                            name="EmailAddress"
                            type="email"
                            maxLength="255"
                            required
                            className="peer w-full bg-white p-2 pt-6 text-gray-900 focus:outline-none"
                            />
                            <label
                            htmlFor="ea1"
                            className="absolute text-gray-500 top-2 left-2 text-base transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-gray-900 peer-focus:text-sm"
                            >
                            Email Address
                            </label>
                        </div>

                        {/* Phone */}
                        <div className="relative">
                            <input
                            id="p1"
                            name="Phone"
                            type="tel"
                            required
                            className="peer w-full bg-white p-2 pt-6 text-gray-900 focus:outline-none"
                            />
                            <label
                            htmlFor="p1"
                            className="absolute text-gray-500 top-2 left-2 text-base transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-gray-900 peer-focus:text-sm"
                            >
                            Phone
                            </label>
                        </div>
                        <div className="relative">
                            <input
                            id="p1"
                            name="Phone"
                            type="tel"
                            required
                            className="peer w-full bg-white p-2 pt-6 text-gray-900 focus:outline-none"
                            />
                            <label
                            htmlFor="p1"
                            className="absolute text-gray-500 top-2 left-2 text-base transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-gray-900 peer-focus:text-sm"
                            >
                            Organization
                            </label>
                        </div>
                        
                        {/* RFP or Documentation */}
                        <div className="relative">
                            <input
                            id="rfp1"
                            name="RFP"
                            type="file"
                            className="peer w-full bg-white p-2 pt-6 text-gray-900 focus:outline-none"
                            />
                            <label
                            htmlFor="rfp1"
                            className="absolute text-gray-500 top-2 left-2 text-base transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-gray-900 peer-focus:text-sm"
                            >
                            RFP or Documentation (20MB)
                            </label>
                        </div>

                        {/* Budget */}
                        <div className="relative">
                            <input
                            id="b1"
                            name="Budget"
                            type="text"
                            maxLength="255"
                            className="peer w-full bg-white p-2 pt-6 text-gray-900 focus:outline-none"
                            />
                            <label
                            htmlFor="b1"
                            className="absolute text-gray-500 top-2 left-2 text-base transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-gray-900 peer-focus:text-sm"
                            >
                            Budget
                            </label>
                        </div>

                        {/* Security Answer */}
                        <div className="relative">
                            <input
                            id="s1"
                            name="SecurityAnswer"
                            type="text"
                            maxLength="255"
                            required
                            pattern="[Bb][Ll][Uu][Ee]"
                            data-pattern-mismatch="Just type 'blue', it's for security"
                            className="peer w-full bg-white p-2 pt-6 text-gray-900 focus:outline-none"
                            />
                            <label
                            htmlFor="s1"
                            className="absolute text-gray-500 top-2 left-2 text-base transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-gray-900 peer-focus:text-sm"
                            >
                            What color is the sky?
                            </label>
                        </div>
                    </div>

                    {/* Message or Project Description */}
                    <div className="relative">
                    <textarea
                        id="m1"
                        name="Message"
                        placeholder=" " 
                        className="peer w-full h-full bg-white p-2 pt-6 text-gray-900 focus:outline-none"
                    ></textarea>
                    <label
                        htmlFor="m1"
                        className="absolute text-gray-500 top-2 left-2 text-base transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-gray-900 peer-focus:text-sm"
                    >
                        Message or Project Description
                    </label>
                    </div>
                </div>

                <button
                    type="submit"
                    className="relative flex flex-col items-center text-white py-2 mt-6 group w-fit mx-auto"
                    >
                    {/* Text and Arrow */}
                    <span className="flex items-center group-hover:text-red-500 transition-all duration-300">
                        Submit <FaLongArrowAltRight className="mt-1 mx-2 group-hover:text-red-500 transition-all duration-300" />
                    </span>

                    {/* Line Underneath */}
                    <div className="w-full h-[2px] bg-red-500 group-hover:bg-transparent transition-all duration-300"></div>
                </button>


            </form>
        </div>
    );
};
  
export default ContactForm;
  