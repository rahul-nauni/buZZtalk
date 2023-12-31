const EmptyState = () => {
    return(
        <div
            className="
                px-4
                py-10
                sm:px-6
                lg:px-8
                h-screen
                flex
                justify-center
                items-center
                bg-gray-100"    
        >
            <div
                className="
                    text-center
                    sm:mx-auto
                    sm:w-full
                    items-center
                    flex
                    flex-col"
            >
                <h3
                    className="
                        h-full
                        text-2xl
                        font-semibold
                        text-gray-800"
                >
                    Start buZZing!
                </h3>
            </div>
        </div>
    );
}

export default EmptyState;