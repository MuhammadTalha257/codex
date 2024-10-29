import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <footer class=" py-10 px-10 font-sans tracking-wide">
            <div class="max-w-2xl mx-auto text-center">
                <a href='javascript:void(0)' class="inline-block"><img src={logo} alt="logo"
                    class='w-48' /></a>
                <p class="text-sm mt-8 text-gray-200">Codex Technologies is a leading software development company dedicated to transforming ideas into digital solutions that drive success. We specialize in creating custom software, mobile apps, and web solutions tailored to meet the unique needs of businesses across diverse industries. <a href='javascript:void(0)' class="text-sm font-semibold text-blue-500">Read
                    more...</a></p>

                <ul class="flex items-center justify-center flex-wrap gap-y-3 gap-x-6 mt-8">
                    <li>
                        <a href="https://github.com/MuhammadTalha257" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" class="inline w-6 h-6" viewBox="0 0 24 24" fill="url(#githubGradient)">
                                <defs>
                                    <linearGradient id="githubGradient" x1="0" y1="0" x2="1" y2="1">
                                        <stop offset="80%" stop-color="#6e5494" />
                                        <stop offset="100%" stop-color="#181717" />
                                    </linearGradient>
                                </defs>
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577 0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.76-1.606-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.503 11.503 0 013.003-.403c1.018.005 2.042.138 3.003.403 2.291-1.553 3.297-1.23 3.297-1.23.655 1.653.243 2.874.12 3.176.77.84 1.236 1.91 1.236 3.22 0 4.61-2.804 5.62-5.476 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.287 0 .319.217.694.825.576C20.565 22.092 24 17.593 24 12.297c0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                    </li>


                    <li><a href="https://www.linkedin.com/in/muhammad-talha-578113139/">
                        <svg xmlns="http://www.w3.org/2000/svg" class="inline w-6 h-6" viewBox="0 0 176 176">
                            <g data-name="Layer 2">
                                <rect width="176" height="176" fill="#0077b5" data-original="#0077b5" rx="24" />
                                <path fill="#fff" d="M63.4 48a15 15 0 1 1-15-15 15 15 0 0 1 15 15zM60 73v66.27a3.71 3.71 0 0 1-3.71 3.73H40.48a3.71 3.71 0 0 1-3.72-3.72V73a3.72 3.72 0 0 1 3.72-3.72h15.81A3.72 3.72 0 0 1 60 73zm82.64 34.5v32.08a3.41 3.41 0 0 1-3.42 3.42h-17a3.41 3.41 0 0 1-3.42-3.42v-31.09c0-4.64 1.36-20.32-12.13-20.32-10.45 0-12.58 10.73-13 15.55v35.86A3.42 3.42 0 0 1 90.3 143H73.88a3.41 3.41 0 0 1-3.41-3.42V72.71a3.41 3.41 0 0 1 3.41-3.42H90.3a3.42 3.42 0 0 1 3.42 3.42v5.78c3.88-5.82 9.63-10.31 21.9-10.31 27.18 0 27.02 25.38 27.02 39.32z" data-original="#ffffff" />
                            </g>
                        </svg>
                    </a></li>

                    <li><a href="https://www.instagram.com/invites/contact/?igsh=no1vsaufpvjp&utm_content=knp3i5x">
                        <svg xmlns="http://www.w3.org/2000/svg" class="inline w-6 h-6" viewBox="0 0 24 24">
                            <linearGradient id="a" x1="-37.106" x2="-26.555" y1="-72.705" y2="-84.047" gradientTransform="matrix(0 -1.982 -1.844 0 -132.522 -51.077)" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="#fd5" />
                                <stop offset=".5" stop-color="#ff543e" />
                                <stop offset="1" stop-color="#c837ab" />
                            </linearGradient>
                            <path fill="url(#a)" d="M1.5 1.633C-.386 3.592 0 5.673 0 11.995c0 5.25-.916 10.513 3.878 11.752 1.497.385 14.761.385 16.256-.002 1.996-.515 3.62-2.134 3.842-4.957.031-.394.031-13.185-.001-13.587-.236-3.007-2.087-4.74-4.526-5.091C18.89.029 18.778.005 15.91 0 5.737.005 3.507-.448 1.5 1.633z" data-original="url(#a)" />
                            <path fill="#fff" d="M11.998 3.139c-3.631 0-7.079-.323-8.396 3.057-.544 1.396-.465 3.209-.465 5.805 0 2.278-.073 4.419.465 5.804 1.314 3.382 4.79 3.058 8.394 3.058 3.477 0 7.062.362 8.395-3.058.545-1.41.465-3.196.465-5.804 0-3.462.191-5.697-1.488-7.375-1.7-1.7-3.999-1.487-7.374-1.487zm-.794 1.597c7.574-.012 8.538-.854 8.006 10.843-.189 4.137-3.339 3.683-7.211 3.683-7.06 0-7.263-.202-7.263-7.265 0-7.145.56-7.257 6.468-7.263zm5.524 1.471a1.063 1.063 0 1 0 0 2.126 1.063 1.063 0 0 0 0-2.126zm-4.73 1.243a4.55 4.55 0 1 0 .001 9.101 4.55 4.55 0 0 0-.001-9.101zm0 1.597c3.905 0 3.91 5.908 0 5.908-3.904 0-3.91-5.908 0-5.908z" data-original="#ffffff" />
                        </svg></a></li>


                </ul>
            </div>

            <ul class="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4 gap-12 mt-20">
                <li class="flex items-center">
                    <div class="bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff' viewBox="0 0 482.6 482.6">
                            <path
                                d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                                data-original="#000000" />
                        </svg>
                    </div>
                    <a href="javascript:void(0)" class="text-white-500 text-sm ml-3">
                        <small class="block">Tel</small>
                        <strong>O3314400257</strong>
                    </a>
                </li>
                <li class="flex items-center">
                    <div class="bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff' viewBox="0 0 479.058 479.058">
                            <path
                                d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                data-original="#000000" />
                        </svg>
                    </div>
                    <a href="javascript:void(0)" class="text-white-500 text-sm ml-3">
                        <small class="block">Mail</small>
                        <strong>codextechnologies257@gmail.com</strong>
                    </a>
                </li>
                <li class="flex items-center">
                    <div class="bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff' viewBox="0 0 368.16 368.16">
                            <path
                                d="M184.08 0c-74.992 0-136 61.008-136 136 0 24.688 11.072 51.24 11.536 52.36 3.576 8.488 10.632 21.672 15.72 29.4l93.248 141.288c3.816 5.792 9.464 9.112 15.496 9.112s11.68-3.32 15.496-9.104l93.256-141.296c5.096-7.728 12.144-20.912 15.72-29.4.464-1.112 11.528-27.664 11.528-52.36 0-74.992-61.008-136-136-136zM293.8 182.152c-3.192 7.608-9.76 19.872-14.328 26.8l-93.256 141.296c-1.84 2.792-2.424 2.792-4.264 0L88.696 208.952c-4.568-6.928-11.136-19.2-14.328-26.808-.136-.328-10.288-24.768-10.288-46.144 0-66.168 53.832-120 120-120s120 53.832 120 120c0 21.408-10.176 45.912-10.28 46.152z"
                                data-original="#000000" />
                            <path
                                d="M184.08 64.008c-39.704 0-72 32.304-72 72s32.296 72 72 72 72-32.304 72-72-32.296-72-72-72zm0 128c-30.872 0-56-25.12-56-56s25.128-56 56-56 56 25.12 56 56-25.128 56-56 56z"
                                data-original="#000000" />
                        </svg>
                    </div>
                    <a href="javascript:void(0)" class="text-white-500 text-sm ml-3 ">
                        <small class="block">Address</small>
                        <strong >G13/1,Islamabad,Pakistan</strong>
                    </a>
                </li>
                <li class="flex items-center">
                    <div class="bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="#007bff" viewBox="0 0 24 24">
                            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24 11.72 11.72 0 003.7.6 1 1 0 011 1v3.29a1 1 0 01-1 1A18.93 18.93 0 013 5a1 1 0 011-1h3.28a1 1 0 011 1 11.72 11.72 0 00.6 3.7 1 1 0 01-.24 1.05z" />
                        </svg>
                    </div>
                    <a href="tel:+923314400257" class="text-white-500 text-sm ml-3">
                        <small class="block">Mobile</small>
                        <strong>+923314400257</strong>
                    </a>
                </li>

            </ul>

            <hr class="my-10 border-gray-500" />

            <div class="flex max-md:flex-col gap-4">
                <ul class="flex flex-wrap gap-4">
                    <li class="text-sm">
                        <a href='javascript:void(0)' class='text-blue-500 font-semibold hover:underline'>Terms of Service</a>
                    </li>
                    <li class="text-sm">
                        <a href='javascript:void(0)' class='text-blue-500 font-semibold hover:underline'>Privacy Policy</a>
                    </li>
                    <li class="text-sm">
                        <a href='javascript:void(0)' class='text-blue-500 font-semibold hover:underline'>Security</a>
                    </li>
                </ul>
                <p class='text-sm text-gray-200 md:ml-auto text-center'>© Codex. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer