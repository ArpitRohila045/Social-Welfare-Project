const bgImg = "https://www.ategroup.com/wp-content/uploads/2015/11/CSR-banner-3.jpg";

const Banner = () => {
    return (
        <div
            className='flex flex-col justify-center items-center font-semibold text-sm bg-cover bg-no-repeat bg-center
            h-[300px]'
            style={{ backgroundImage: `url(${bgImg})` }}
        >
            <div className="text-zinc-700 text-center">
                {/* <p>loremVideo Catalog is brought to you by Templat.</p> */}
                {/* <p>this is full-width video banner</p> */}
            </div>
            <button className='m-8 py-2 px-8 rounded bg-zinc-900 hover:bg-zinc-800 text-white font-semibold'>
                <a href="#">Discover</a>
            </button>
        </div>
    );
}

export default Banner;
