const CompanyProfile = () => {
    const whatsappbutton = () => {
        let newTab = document.createElement('a');
        newTab.href = "https://web.whatsapp.com/send?phone=+6281339997277&text=Saya ingin menanyakan tentang";
        newTab.target = "_blank";
        newTab.click();
    }
    return (
        <div className='bg-white border-gray-200'>
            <section className="bg-white dark:bg-gray-900">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6" >
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Pasang Epoxy Lantai Bebas Khawatir</h2>
                        <p className="mb-4">Jasa pengecatan Epoxy termurah se-Indonesia terpercaya selama lebih dari 20 tahun di bidang pengecatan lantai dan konstruksi.</p>
                        <p className="mb-4">SBP Jakarta melayani jasa pengecatan Epoxy untuk anda yang mengedepankan kualitas. Dengan produk kualitas terbaik, anda juga akan mendapatkan kepuasan maksimal.</p>
                        <p className="mb-4">Tim profesional kami akan memberikan saran terbaik untuk kebutuhan cat anda. Jadi tidak perlu khawatir karena proyek anda akan selesai tepat waktu dengan hasil terbaik. Segera hubungi kami sekarang juga.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <img className="w-full rounded-lg" src="./assets/front1.jpg" alt="office content 1" />
                        <img className="mt-4 w-full lg:mt-10 rounded-lg" src="./assets/front2.jpg" alt="office content 2" />
                    </div>
                </div>
            </section>
            <div className="grid gap-4 p-10">
                <p className="subpixel-antialiased font-medium text-gray-900">&quot;Temukan Kenapa Anda Harus Memilih Epoxy untuk Lantai Anda!&quot;</p>
                <div className="grid md:grid-cols-5 xl:grid-cols-5 sm:grid-cols-2 gap-5">
                    <div>
                        <img className="h-auto max-w-full rounded-lg mb-2" src="./assets/ketahanan.jpeg" alt="" />
                        <span className="text-gray-900">Kekuatan dan Daya Tahan</span>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg mb-2" src="./assets/cleaning.jpg" alt="" />
                        <span className="text-gray-900">Kemudahan Pembersihan</span>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg mb-2" src="./assets/estetik.png" alt="" />
                        <span className="text-gray-900">Tampilan Estetika</span>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg mb-2" src="./assets/ketahananlantai.jpeg" alt="" />
                        <span className="text-gray-900">Kekuatan Tahan Lama</span>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg mb-2" src="./assets/linemarking.png" alt="" />
                        <span className="text-gray-900">Pengaplikasian yang Mudah</span>
                    </div>
                </div>
            </div>
        
            <div className="mx-auto max-w-screen-xl bg-white dark:bg-gray-900 p-10 mb-4">
                <div className="text-center">
                    <p className="dark:text-white mb-2 text-5xl">Tanya Kami</p>
                    <p className="dark:text-white mb-10">Temukan jawaban dari beberapa pertanyaan yang paling sering diajukan</p>
                </div>
                <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
                    <li className="mb-10 ms-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M8.737 8.737a21.49 21.49 0 0 1 3.308-2.724m0 0c3.063-2.026 5.99-2.641 7.331-1.3 1.827 1.828.026 6.591-4.023 10.64-4.049 4.049-8.812 5.85-10.64 4.023-1.33-1.33-.736-4.218 1.249-7.253m6.083-6.11c-3.063-2.026-5.99-2.641-7.331-1.3-1.827 1.828-.026 6.591 4.023 10.64m3.308-9.34a21.497 21.497 0 0 1 3.308 2.724m2.775 3.386c1.985 3.035 2.579 5.923 1.248 7.253-1.336 1.337-4.245.732-7.295-1.275M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                        </svg>
                        </span>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Pelapisan Epoxy itu apa?</h3>
                        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                    </svg>
                                    <span>Pelapisan Epoxy merupakan pelapisan yang sering digunakan untuk lantai industri dan area luar ruangan serta memiliki keunggulan ketahanan yang lebih baik.</span>
                                </li>
                                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                    </svg>
                                    <span>Memiliki formula khusus membuat cat ini mampu menempel dengan baik pada lantai.</span>
                                </li>
                                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                    </svg>
                                    <span>Kegunaan cat Epoxy memberikan perlindungan serta estetika pada lantai agar lebih menarik dengan paduan fungsional agar tidak monoton.</span>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="mb-10 ms-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M6 2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 1 0 0-2h-2v-2h2a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2h-8v16h5v2H7a1 1 0 1 1 0-2h1V2H6Z" clipRule="evenodd"/>
                        </svg>
                        </span>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Epoxy digunakan untuk apa?</h3>
                        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                    </svg>
                                    <span>Epoxy lantai berguna untuk memenuhi syarat standarisasi produksi.</span>
                                </li>
                                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                    </svg>
                                    <span>Melindungi media substrat sehingga dapat menjadi lebih kuat.</span>
                                </li>
                                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                    </svg>
                                    <span>Terlihat lebih bersih serta memiliki ketahanan oil, kimiawi serta daya tahan yang relatif lama.</span>
                                </li>
                                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                    </svg>
                                    <span>Sangat bermanfaat untuk industri, gudang dan fasilitas umum seperti area parkir dll.</span>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="mb-10 ms-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2"/>
                        </svg>
                        </span>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Berapa harga epoxy lantai?</h3>
                        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                    </svg>
                                    <span>SBP Jakarta menawarkan promo jasa epoxy lantai ,mulai dari 30.000/m2</span>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="mb-10 ms-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z"/>
                        </svg>
                        </span>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Berapa tebal minimal Epoxy lantai?</h3>
                        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                    </svg>
                                    <span>Ketebalan pelapisan epoxy tergantung dari kebutuhan anda.Minimal 300 micron untuk kondisi lantai yang sudah memenuhi syarat akan di lapisi cat Epoxy.</span>
                                </li>
                                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                    </svg>
                                    <span>Area dengan mobilitas yang tinggi membutuhkan lapisan epoxy yang lebih tebal. Jika lantai dilewati oleh alat berat, Anda harus memilih lapisan epoxy yang lebih tebal minimal 500 micron untuk membantu melindungi lantai.</span>
                                </li>
                                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                    </svg>
                                    <span>Jika Anda melapisi lantai dengan lalu lintas pejalan kaki yang ringan, Anda dapat menghemat biaya dengan memilih lapisan epoxy yang lebih tipis mulai dari 300 micron.</span>
                                </li>
                                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                    </svg>
                                    <span>Penambahan lapisan tekstur anti licin juga dapat membantu untuk lalu lintas yang memerlukan tingkat keamanan seperti area yang terkena oli atau terkena air.</span>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ol>
            </div>

            <div className="mx-auto md:w-2/5 bg-white mb-10 p-2">
                <div className="text-center">
                    <p className="text-black mb-2 text-3xl">Portfolio</p>
                </div>
                <div className="carousel w-full ">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img
                        src="./assets/1.png"
                        className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                        src="./assets/5.png"
                        className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                        src="./assets/12.png"
                        className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img
                        src="./assets/13.png"
                        className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-screen-xl bg-white dark:bg-gray-900 p-10 mb-4">
                <div className="text-center">
                    <p className="dark:text-white mb-2 text-3xl">HUBUNGI KAMI</p>
                    <p className="dark:text-white mb-10">Apartment Springlake Summarecon Bekasi Tower Azola, Jawa Barat 17142</p>
                </div>
                <div className="flex items-center justify-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7932.627107435565!2d106.999689!3d-6.222322!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d004fefb6b9%3A0x4af415306a6eef12!2sSBP%20Jakarta!5e0!3m2!1sen!2sid!4v1720876229054!5m2!1sen!2sid" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
            </div>
            <div className="fixed bottom-4 right-4">
                <button className="flex bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg" onClick={() => whatsappbutton()}>
                    <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path fill="currentColor" fillRule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clipRule="evenodd"/>
                        <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
                    </svg> Whatsapp
                </button>
            </div>
            <div className="mx-auto max-w-screen-sm bg-white dark:bg-gray-900 p-10 mb-4">
                <div className="text-center mb-4">
                    <p className="dark:text-white mb-2 text-3xl">CLIENT KAMI</p>
                </div>
                <div className="logo-container w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                    <ul className="logo flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                        <li>
                            <img className="object-contain h-30 w-60" src="./assets/bogasari.png" alt="Bogasari" />
                        </li>
                        <li>
                            <img className="object-contain h-30 w-60" src="./assets/ajinomoto.png" alt="Ajinomoto" />
                        </li>
                        <li>
                            <img className="object-contain h-30 w-60" src="./assets/indofood.png" alt="Indofood" />
                        </li>
                        <li>
                            <img className="object-contain h-30 w-60" src="./assets/cocacola.png" alt="CocaCola" />
                        </li>
                        <li>
                            <img className="object-contain h-30 w-60" src="./assets/indospringtbk.png" alt="Indospring" />
                        </li>
                    </ul>               
                </div>
            </div>
        </div>
    )
}

export default CompanyProfile

