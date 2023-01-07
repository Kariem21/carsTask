import { Link } from "react-router-dom";
import "./sidebar.css";
function Sidebar() {
  return (
    <>
    <div className="Allsidebar">
        <div className="content">
            <ul className="sidebar-top">

                <div className="Alllogo">
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.0751953" width="26.914" height="26.85" rx="6" fill="#A162F7"/>
                    <path d="M9.1273 19.7072L10.8492 17.9853C6.48698 15.345 7.21403 11.3367 8.12284 9.66258L13.5039 14.9002L18.885 9.66258C20.9513 14.1396 17.8805 17.0287 16.0868 17.9136L17.9523 19.7072C24.6248 14.6849 21.3961 7.94063 18.885 6.0752L13.5039 11.4563L7.97934 6.0752C2.09602 11.815 6.25741 18.2723 9.1273 19.7072Z" fill="white"/>
                    </svg>
                    <p>Motiv.</p>
                    

                </div>
                <li>
                    <div>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.583 12.4997C14.2062 12.4997 13.6738 12.5518 13.1195 12.6277C12.8606 12.6631 12.6631 12.8606 12.6277 13.1195C12.5518 13.6738 12.4997 14.2062 12.4997 14.583C12.4997 14.9598 12.5518 15.4922 12.6277 16.0465C12.6631 16.3054 12.8606 16.5029 13.1195 16.5383C13.6738 16.6143 14.2062 16.6663 14.583 16.6663C14.9598 16.6663 15.4922 16.6143 16.0465 16.5383C16.3054 16.5029 16.5029 16.3054 16.5383 16.0465C16.6143 15.4922 16.6663 14.9598 16.6663 14.583C16.6663 14.2062 16.6143 13.6738 16.5383 13.1195C16.5029 12.8606 16.3054 12.6631 16.0465 12.6277C15.4922 12.5518 14.9598 12.4997 14.583 12.4997ZM12.8934 10.9764C11.8935 11.1134 11.1134 11.8935 10.9764 12.8934C10.8979 13.4669 10.833 14.0898 10.833 14.583C10.833 15.0762 10.8979 15.6991 10.9764 16.2726C11.1134 17.2726 11.8935 18.0527 12.8934 18.1896C13.4669 18.2681 14.0898 18.333 14.583 18.333C15.0762 18.333 15.6991 18.2681 16.2726 18.1896C17.2726 18.0527 18.0527 17.2726 18.1896 16.2726C18.2681 15.6991 18.333 15.0762 18.333 14.583C18.333 14.0898 18.2681 13.4669 18.1896 12.8934C18.0527 11.8935 17.2726 11.1134 16.2726 10.9764C15.6991 10.8979 15.0762 10.833 14.583 10.833C14.0898 10.833 13.4669 10.8979 12.8934 10.9764Z" fill="#5F6165"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.41699 12.4997C5.04017 12.4997 4.50776 12.5518 3.9535 12.6277C3.69456 12.6631 3.49712 12.8606 3.46165 13.1195C3.38575 13.6738 3.33366 14.2062 3.33366 14.583C3.33366 14.9598 3.38575 15.4922 3.46165 16.0465C3.49712 16.3054 3.69456 16.5029 3.9535 16.5383C4.50776 16.6143 5.04017 16.6663 5.41699 16.6663C5.79381 16.6663 6.32622 16.6143 6.88048 16.5383C7.13942 16.5029 7.33687 16.3054 7.37233 16.0465C7.44824 15.4922 7.50033 14.9598 7.50033 14.583C7.50033 14.2062 7.44824 13.6738 7.37233 13.1195C7.33687 12.8606 7.13942 12.6631 6.88048 12.6277C6.32622 12.5518 5.79381 12.4997 5.41699 12.4997ZM3.72736 10.9764C2.72744 11.1134 1.94734 11.8935 1.8104 12.8934C1.73186 13.4669 1.66699 14.0898 1.66699 14.583C1.66699 15.0762 1.73186 15.6991 1.8104 16.2726C1.94734 17.2726 2.72744 18.0527 3.72736 18.1896C4.30086 18.2681 4.92379 18.333 5.41699 18.333C5.91019 18.333 6.53312 18.2681 7.10663 18.1896C8.10655 18.0527 8.88664 17.2726 9.02358 16.2726C9.10213 15.6991 9.16699 15.0762 9.16699 14.583C9.16699 14.0898 9.10213 13.4669 9.02358 12.8934C8.88664 11.8935 8.10655 11.1134 7.10663 10.9764C6.53312 10.8979 5.91019 10.833 5.41699 10.833C4.92379 10.833 4.30086 10.8979 3.72736 10.9764Z" fill="#5F6165"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.583 3.33366C14.2062 3.33366 13.6738 3.38575 13.1195 3.46165C12.8606 3.49712 12.6631 3.69456 12.6277 3.9535C12.5518 4.50776 12.4997 5.04017 12.4997 5.41699C12.4997 5.79381 12.5518 6.32622 12.6277 6.88048C12.6631 7.13942 12.8606 7.33687 13.1195 7.37233C13.6738 7.44824 14.2062 7.50033 14.583 7.50033C14.9598 7.50033 15.4922 7.44824 16.0465 7.37233C16.3054 7.33687 16.5029 7.13942 16.5383 6.88048C16.6143 6.32622 16.6663 5.79381 16.6663 5.41699C16.6663 5.04017 16.6143 4.50776 16.5383 3.9535C16.5029 3.69456 16.3054 3.49712 16.0465 3.46165C15.4922 3.38575 14.9598 3.33366 14.583 3.33366ZM12.8934 1.8104C11.8935 1.94734 11.1134 2.72744 10.9764 3.72736C10.8979 4.30086 10.833 4.92379 10.833 5.41699C10.833 5.91019 10.8979 6.53312 10.9764 7.10663C11.1134 8.10655 11.8935 8.88664 12.8934 9.02358C13.4669 9.10213 14.0898 9.16699 14.583 9.16699C15.0762 9.16699 15.6991 9.10213 16.2726 9.02358C17.2726 8.88664 18.0527 8.10655 18.1896 7.10663C18.2681 6.53312 18.333 5.91019 18.333 5.41699C18.333 4.92379 18.2681 4.30086 18.1896 3.72736C18.0527 2.72744 17.2726 1.94734 16.2726 1.8104C15.6991 1.73186 15.0762 1.66699 14.583 1.66699C14.0898 1.66699 13.4669 1.73186 12.8934 1.8104Z" fill="#5F6165"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.41699 3.33366C5.04017 3.33366 4.50776 3.38575 3.9535 3.46165C3.69456 3.49712 3.49712 3.69456 3.46165 3.9535C3.38575 4.50776 3.33366 5.04017 3.33366 5.41699C3.33366 5.79381 3.38575 6.32622 3.46165 6.88048C3.49712 7.13942 3.69456 7.33687 3.9535 7.37233C4.50776 7.44824 5.04017 7.50033 5.41699 7.50033C5.79381 7.50033 6.32622 7.44824 6.88048 7.37233C7.13942 7.33687 7.33687 7.13942 7.37233 6.88048C7.44824 6.32622 7.50033 5.79381 7.50033 5.41699C7.50033 5.04017 7.44824 4.50776 7.37233 3.9535C7.33687 3.69456 7.13942 3.49712 6.88048 3.46165C6.32622 3.38575 5.79381 3.33366 5.41699 3.33366ZM3.72736 1.8104C2.72744 1.94734 1.94734 2.72744 1.8104 3.72736C1.73186 4.30086 1.66699 4.92379 1.66699 5.41699C1.66699 5.91019 1.73186 6.53312 1.8104 7.10663C1.94734 8.10655 2.72744 8.88664 3.72736 9.02358C4.30086 9.10213 4.92379 9.16699 5.41699 9.16699C5.91019 9.16699 6.53312 9.10213 7.10663 9.02358C8.10655 8.88664 8.88664 8.10655 9.02358 7.10663C9.10213 6.53312 9.16699 5.91019 9.16699 5.41699C9.16699 4.92379 9.10213 4.30086 9.02358 3.72736C8.88664 2.72744 8.10655 1.94734 7.10663 1.8104C6.53312 1.73186 5.91019 1.66699 5.41699 1.66699C4.92379 1.66699 4.30086 1.73186 3.72736 1.8104Z" fill="#5F6165"/>
                        </svg>
                        <Link to="/dashboard">Dashboard</Link>
                    </div>
                </li>
                <li>
                    <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0003 18.3337C14.6027 18.3337 18.3337 14.6027 18.3337 10.0003C18.3337 5.39795 14.6027 1.66699 10.0003 1.66699C5.39795 1.66699 1.66699 5.39795 1.66699 10.0003C1.66699 14.6027 5.39795 18.3337 10.0003 18.3337ZM15.2668 14.0884C16.1444 12.9595 16.667 11.541 16.667 10.0003C16.667 6.60064 14.1223 3.79532 10.8337 3.38524V6.77201C12.2713 7.14204 13.3337 8.44713 13.3337 10.0003C13.3337 10.6185 13.1654 11.1974 12.8721 11.6937L15.2668 14.0884ZM14.0883 15.2669L11.6936 12.8722C11.1973 13.1654 10.6185 13.3337 10.0003 13.3337C9.38218 13.3337 8.80334 13.1654 8.3071 12.8722L5.91236 15.2669C7.04125 16.1444 8.45976 16.667 10.0003 16.667C11.5409 16.667 12.9594 16.1444 14.0883 15.2669ZM6.66699 10.0003C6.66699 10.6185 6.83528 11.1974 7.12855 11.6937L4.73383 14.0884C3.85625 12.9595 3.33366 11.541 3.33366 10.0003C3.33366 6.60064 5.8784 3.79532 9.16699 3.38524V6.77201C7.7293 7.14204 6.66699 8.44713 6.66699 10.0003ZM10.0003 11.667C10.9208 11.667 11.667 10.9208 11.667 10.0003C11.667 9.07985 10.9208 8.33366 10.0003 8.33366C9.07985 8.33366 8.33366 9.07985 8.33366 10.0003C8.33366 10.9208 9.07985 11.667 10.0003 11.667Z" fill="#72767C"/>
                    </svg>

                        <a href="#">Assets</a>
                    </div>
                </li>
                <li >
                    <div >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.3103 7.63L16.1703 4.20917C16.005 3.71124 15.6869 3.27808 15.2613 2.97126C14.8356 2.66443 14.3242 2.49953 13.7995 2.5H6.20116C5.67648 2.49953 5.165 2.66443 4.7394 2.97126C4.31379 3.27808 3.9957 3.71124 3.83033 4.20917L2.69033 7.63C2.3875 7.75707 2.12889 7.97063 1.94686 8.24397C1.76484 8.51731 1.66748 8.83827 1.66699 9.16667V13.3333C1.66699 13.9608 2.01949 14.5017 2.53283 14.7858C2.52199 14.8408 2.50033 14.8908 2.50033 14.9483V16.6667C2.50033 16.8877 2.58812 17.0996 2.7444 17.2559C2.90068 17.4122 3.11265 17.5 3.33366 17.5H4.16699C4.38801 17.5 4.59997 17.4122 4.75625 17.2559C4.91253 17.0996 5.00033 16.8877 5.00033 16.6667V15H15.0003V16.6667C15.0003 16.8877 15.0881 17.0996 15.2444 17.2559C15.4007 17.4122 15.6126 17.5 15.8337 17.5H16.667C16.888 17.5 17.1 17.4122 17.2562 17.2559C17.4125 17.0996 17.5003 16.8877 17.5003 16.6667V14.9483C17.5003 14.8908 17.4787 14.84 17.4678 14.7858C17.729 14.6434 17.9471 14.4335 18.0994 14.178C18.2517 13.9225 18.3326 13.6308 18.3337 13.3333V9.16667C18.3337 8.47583 17.9103 7.8825 17.3103 7.63ZM3.33366 13.3333V9.16667H16.667L16.6687 13.3333H3.33366ZM6.20116 4.16667H13.7987C14.1578 4.16667 14.4762 4.395 14.5895 4.73667L15.5112 7.5H4.48949L5.41033 4.73667C5.46562 4.57066 5.57176 4.42627 5.7137 4.32397C5.85564 4.22166 6.02619 4.16663 6.20116 4.16667Z" fill="#72767C"/>
                    <path d="M5.41699 12.5C6.10735 12.5 6.66699 11.9404 6.66699 11.25C6.66699 10.5596 6.10735 10 5.41699 10C4.72664 10 4.16699 10.5596 4.16699 11.25C4.16699 11.9404 4.72664 12.5 5.41699 12.5Z" fill="#72767C"/>
                    <path d="M14.584 12.5C15.2743 12.5 15.834 11.9404 15.834 11.25C15.834 10.5596 15.2743 10 14.584 10C13.8936 10 13.334 10.5596 13.334 11.25C13.334 11.9404 13.8936 12.5 14.584 12.5Z" fill="#72767C"/>
                    </svg>

                        <Link to="/booking">Booking</Link>
                    </div>
                </li>
                <li >
                    <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7856 6.66667H5.2153C4.25393 6.66667 3.49191 7.4778 3.55188 8.4373L3.96855 15.104C4.02345 15.9824 4.75186 16.6667 5.63197 16.6667H14.369C15.2491 16.6667 15.9775 15.9824 16.0324 15.104L16.449 8.4373C16.509 7.4778 15.747 6.66667 14.7856 6.66667ZM5.2153 5C3.29256 5 1.76852 6.62227 1.88846 8.54126L2.30513 15.2079C2.41493 16.9647 3.87176 18.3333 5.63197 18.3333H14.369C16.1292 18.3333 17.586 16.9647 17.6958 15.2079L18.1125 8.54126C18.2324 6.62227 16.7084 5 14.7856 5H5.2153Z" fill="#72767C"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.83301 5.83366C5.83301 3.53247 7.69849 1.66699 9.99967 1.66699C12.3009 1.66699 14.1663 3.53247 14.1663 5.83366V7.50032C14.1663 7.96056 13.7932 8.33366 13.333 8.33366C12.8728 8.33366 12.4997 7.96056 12.4997 7.50032V5.83366C12.4997 4.45295 11.3804 3.33366 9.99967 3.33366C8.61896 3.33366 7.49967 4.45295 7.49967 5.83366V7.50032C7.49967 7.96056 7.12658 8.33366 6.66634 8.33366C6.2061 8.33366 5.83301 7.96056 5.83301 7.50032V5.83366Z" fill="#72767C"/>
                    </svg>

                        <a href="#">Sell Cars</a>
                    </div>
                </li>

                <li>
                    <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.33301 16.667C8.33301 18.0477 7.21372 19.167 5.83301 19.167C4.4523 19.167 3.33301 18.0477 3.33301 16.667C3.33301 15.2863 4.4523 14.167 5.83301 14.167C7.21372 14.167 8.33301 15.2863 8.33301 16.667ZM6.66634 16.667C6.66634 17.1272 6.29324 17.5003 5.83301 17.5003C5.37277 17.5003 4.99967 17.1272 4.99967 16.667C4.99967 16.2068 5.37277 15.8337 5.83301 15.8337C6.29324 15.8337 6.66634 16.2068 6.66634 16.667Z" fill="#72767C"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6663 16.667C16.6663 18.0477 15.5471 19.167 14.1663 19.167C12.7856 19.167 11.6663 18.0477 11.6663 16.667C11.6663 15.2863 12.7856 14.167 14.1663 14.167C15.5471 14.167 16.6663 15.2863 16.6663 16.667ZM14.9997 16.667C14.9997 17.1272 14.6266 17.5003 14.1663 17.5003C13.7061 17.5003 13.333 17.1272 13.333 16.667C13.333 16.2068 13.7061 15.8337 14.1663 15.8337C14.6266 15.8337 14.9997 16.2068 14.9997 16.667Z" fill="#72767C"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.75418 2.12685C1.96 1.7152 2.46056 1.54835 2.87221 1.75418L3.70847 2.1723C4.48285 2.5595 5.00178 3.3198 5.08016 4.18203L5.12003 4.62059C5.13954 4.8352 5.31949 4.99953 5.53499 4.99953H16.5291C17.9837 4.99953 18.9905 6.45239 18.4798 7.81437L17.0187 11.7107C16.6528 12.6864 15.72 13.3329 14.6779 13.3329H6.52156C5.22855 13.3329 4.14889 12.3469 4.03182 11.0592L3.42034 4.33293C3.39421 4.04551 3.22124 3.79208 2.96311 3.66302L2.12685 3.24489C1.7152 3.03906 1.54835 2.5385 1.75418 2.12685ZM5.76226 6.6662C5.51725 6.6662 5.32512 6.87658 5.34731 7.12059L5.69164 10.9083C5.73067 11.3375 6.09055 11.6662 6.52156 11.6662H14.6779C15.0252 11.6662 15.3362 11.4507 15.4581 11.1255L16.9193 7.22917C17.0214 6.95677 16.82 6.6662 16.5291 6.6662H5.76226Z" fill="#72767C"/>
                    </svg>

                        <a href="#">Buy Cars</a>
                    </div>
                </li>
                <li>
                    <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.0896 3.08958C18.415 2.76414 18.415 2.23651 18.0896 1.91107C17.7641 1.58563 17.2365 1.58563 16.9111 1.91107L6.4944 12.3277C6.16897 12.6532 6.16897 13.1808 6.4944 13.5062C6.81984 13.8317 7.34748 13.8317 7.67291 13.5062L18.0896 3.08958Z" fill="#72767C"/>
                    <path d="M4.33958 16.8396C4.66502 16.5141 4.66502 15.9865 4.33958 15.6611C4.01414 15.3356 3.48651 15.3356 3.16107 15.6611L1.91107 16.9111C1.58563 17.2365 1.58563 17.7641 1.91107 18.0896C2.23651 18.415 2.76414 18.415 3.08958 18.0896L4.33958 16.8396Z" fill="#72767C"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.20524 16.1821C5.43628 16.4132 5.7943 16.5017 6.04817 16.296C6.42532 15.9904 6.66641 15.5235 6.66641 15.0003C6.66641 14.0799 5.92022 13.3337 4.99975 13.3337C4.47653 13.3337 4.00963 13.5748 3.70407 13.9519C3.49839 14.2058 3.5869 14.5638 3.81794 14.7948L5.20524 16.1821ZM6.01901 18.1749C5.38766 18.3775 4.73635 18.0703 4.26751 17.6014L2.39865 15.7326C1.9298 15.2637 1.62259 14.6124 1.82513 13.9811C2.25578 12.6387 3.51429 11.667 4.99975 11.667C6.8407 11.667 8.33308 13.1594 8.33308 15.0003C8.33308 16.4858 7.36142 17.7443 6.01901 18.1749Z" fill="#72767C"/>
                    <path d="M1.91042 3.08958C1.58498 2.76414 1.58498 2.23651 1.91042 1.91107C2.23586 1.58563 2.76349 1.58563 3.08893 1.91107L13.5056 12.3277C13.831 12.6532 13.831 13.1808 13.5056 13.5062C13.1802 13.8317 12.6525 13.8317 12.3271 13.5062L1.91042 3.08958Z" fill="#72767C"/>
                    <path d="M15.6604 16.8396C15.335 16.5141 15.335 15.9865 15.6604 15.6611C15.9859 15.3356 16.5135 15.3356 16.8389 15.6611L18.0889 16.9111C18.4144 17.2365 18.4144 17.7641 18.0889 18.0896C17.7635 18.415 17.2359 18.415 16.9104 18.0896L15.6604 16.8396Z" fill="#72767C"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7948 16.1821C14.5637 16.4132 14.2057 16.5017 13.9518 16.296C13.5747 15.9904 13.3336 15.5235 13.3336 15.0003C13.3336 14.0799 14.0798 13.3337 15.0003 13.3337C15.5235 13.3337 15.9904 13.5748 16.2959 13.9519C16.5016 14.2058 16.4131 14.5638 16.1821 14.7948L14.7948 16.1821ZM13.981 18.1749C14.6123 18.3775 15.2636 18.0703 15.7325 17.6014L17.6014 15.7326C18.0702 15.2637 18.3774 14.6124 18.1749 13.9811C17.7442 12.6387 16.4857 11.667 15.0003 11.667C13.1593 11.667 11.6669 13.1594 11.6669 15.0003C11.6669 16.4858 12.6386 17.7443 13.981 18.1749Z" fill="#72767C"/>
                    </svg>

                        <a href="#">Services</a>
                    </div>
                </li>
                <li>
                    <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8337 4.99967H4.16699C3.70676 4.99967 3.33366 5.37277 3.33366 5.83301V15.833C3.33366 16.2932 3.70676 16.6663 4.16699 16.6663H15.8337C16.2939 16.6663 16.667 16.2932 16.667 15.833V5.83301C16.667 5.37277 16.2939 4.99967 15.8337 4.99967ZM4.16699 3.33301C2.78628 3.33301 1.66699 4.4523 1.66699 5.83301V15.833C1.66699 17.2137 2.78628 18.333 4.16699 18.333H15.8337C17.2144 18.333 18.3337 17.2137 18.3337 15.833V5.83301C18.3337 4.4523 17.2144 3.33301 15.8337 3.33301H4.16699Z" fill="#72767C"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.33333 10C7.8731 10 7.5 10.3731 7.5 10.8333C7.5 11.2936 7.8731 11.6667 8.33333 11.6667H14.1667C14.6269 11.6667 15 11.2936 15 10.8333C15 10.3731 14.6269 10 14.1667 10H8.33333ZM5.83333 13.3333C5.3731 13.3333 5 13.7064 5 14.1667C5 14.6269 5.3731 15 5.83333 15H10.8333C11.2936 15 11.6667 14.6269 11.6667 14.1667C11.6667 13.7064 11.2936 13.3333 10.8333 13.3333H5.83333Z" fill="#72767C"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.83333 1.66699C5.3731 1.66699 5 2.04009 5 2.50033V5.83366C5 6.2939 5.3731 6.66699 5.83333 6.66699C6.29357 6.66699 6.66667 6.2939 6.66667 5.83366V2.50033C6.66667 2.04009 6.29357 1.66699 5.83333 1.66699ZM14.1667 1.66699C13.7064 1.66699 13.3333 2.04009 13.3333 2.50033V5.83366C13.3333 6.2939 13.7064 6.66699 14.1667 6.66699C14.6269 6.66699 15 6.2939 15 5.83366V2.50033C15 2.04009 14.6269 1.66699 14.1667 1.66699Z" fill="#72767C"/>
                    </svg>


                        <a href="#">Calender</a>
                    </div>
                </li>
                <li>
                    <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.83366 13.2514V15.8296L10.0522 13.3368L10.4931 13.3296C12.2463 13.3009 13.8242 13.1244 15.004 12.9449C15.7485 12.8316 16.2659 12.3119 16.3783 11.6594C16.5342 10.7544 16.667 9.60776 16.667 8.33366C16.667 7.05956 16.5342 5.91293 16.3783 5.00788C16.2659 4.35539 15.7485 3.83576 15.004 3.72247C13.7136 3.52613 11.9489 3.33366 10.0003 3.33366C8.05171 3.33366 6.28706 3.52613 4.99668 3.72247C4.25211 3.83576 3.73474 4.3554 3.62235 5.00788C3.46646 5.91293 3.33366 7.05956 3.33366 8.33366C3.33366 9.60776 3.46646 10.7544 3.62235 11.6594C3.71995 12.226 4.11577 12.6802 4.69289 12.8721L5.83366 13.2514ZM1.97987 4.72497C2.2217 3.32106 3.33759 2.28906 4.74597 2.07476C6.09541 1.86944 7.94665 1.66699 10.0003 1.66699C12.054 1.66699 13.9052 1.86944 15.2547 2.07476C16.6631 2.28906 17.779 3.32105 18.0208 4.72497C18.1893 5.70342 18.3337 6.94637 18.3337 8.33366C18.3337 9.72095 18.1893 10.9639 18.0208 11.9424C17.779 13.3463 16.6631 14.3783 15.2547 14.5926C14.0202 14.7804 12.3657 14.9658 10.5204 14.996L5.42426 18.0074C4.86875 18.3356 4.16699 17.9352 4.16699 17.29V14.4536C3.03913 14.0786 2.18746 13.1475 1.97987 11.9424C1.81134 10.9639 1.66699 9.72095 1.66699 8.33366C1.66699 6.94637 1.81134 5.70342 1.97987 4.72497Z" fill="#72767C"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.83333 5.83301C5.3731 5.83301 5 6.2061 5 6.66634C5 7.12658 5.3731 7.49967 5.83333 7.49967H14.1667C14.6269 7.49967 15 7.12658 15 6.66634C15 6.2061 14.6269 5.83301 14.1667 5.83301H5.83333ZM5.83333 9.16634C5.3731 9.16634 5 9.53944 5 9.99968C5 10.4599 5.3731 10.833 5.83333 10.833H9.16667C9.6269 10.833 10 10.4599 10 9.99968C10 9.53944 9.6269 9.16634 9.16667 9.16634H5.83333Z" fill="#72767C"/>
                    </svg>


                        <a href="#">Messages</a>
                    </div>
                </li>
            </ul>
            <ul className="sidebar-bottom">


                <li className="setting">
                    <div className="calender">
                        <div className="message">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6249 5.909C16.6336 5.25809 16.3896 4.60444 15.8929 4.10777C15.3962 3.6111 14.7426 3.3671 14.0917 3.37576C14.0914 3.37576 14.0919 3.37576 14.0917 3.37576C13.7319 3.38065 13.3722 3.46274 13.0411 3.622C12.9225 3.67908 12.8074 3.74607 12.6971 3.82297C12.6547 3.85259 12.6 3.85934 12.5522 3.83951C12.5044 3.8197 12.4705 3.77627 12.4614 3.72534C12.4378 3.59299 12.4038 3.46424 12.3603 3.33998C12.2388 2.99325 12.043 2.68143 11.7921 2.42358C11.7919 2.4234 11.7923 2.42375 11.7921 2.42358C11.338 1.95719 10.7027 1.66699 10.0003 1.66699C9.29793 1.66699 8.6632 1.95666 8.20905 2.42305C8.20888 2.42322 8.20923 2.42287 8.20905 2.42305C7.95812 2.6809 7.76185 2.99325 7.64036 3.33998C7.59681 3.46424 7.56281 3.59299 7.53922 3.72534C7.53014 3.77626 7.49623 3.8197 7.44845 3.83951C7.40062 3.85934 7.34597 3.85259 7.30351 3.82297C7.19324 3.74607 7.07816 3.67908 6.95951 3.622C6.62842 3.46274 6.26951 3.38066 5.90974 3.37577C5.90949 3.37577 5.90998 3.37577 5.90974 3.37577C5.25882 3.36711 4.60444 3.6111 4.10777 4.10777C3.6111 4.60444 3.3671 5.25809 3.37576 5.909C3.37576 5.90925 3.37576 5.90876 3.37576 5.909C3.38065 6.26877 3.46274 6.62841 3.622 6.9595C3.67908 7.07816 3.74607 7.19324 3.82297 7.3035C3.85259 7.34597 3.85934 7.40062 3.83951 7.44845C3.8197 7.49623 3.77626 7.53014 3.72534 7.53922C3.59298 7.56281 3.46423 7.59682 3.33997 7.64036C2.99324 7.76186 2.68142 7.95761 2.42358 8.20854C2.4234 8.20871 2.42375 8.20837 2.42358 8.20854C1.95719 8.66268 1.66699 9.29793 1.66699 10.0003C1.66699 10.7027 1.95666 11.3375 2.42305 11.7916C2.42323 11.7918 2.42287 11.7914 2.42305 11.7916C2.6809 12.0425 2.99324 12.2388 3.33997 12.3603C3.46423 12.4038 3.59298 12.4378 3.72534 12.4614C3.77626 12.4705 3.8197 12.5044 3.83951 12.5522C3.85934 12.6 3.85259 12.6547 3.82297 12.6971C3.74607 12.8074 3.67908 12.9225 3.622 13.0412C3.46274 13.3722 3.38066 13.7312 3.37577 14.0909C3.37577 14.0912 3.37577 14.0907 3.37577 14.0909C3.36711 14.7418 3.6111 15.3962 4.10777 15.8929C4.60444 16.3896 5.25809 16.6336 5.909 16.6249C5.90925 16.6249 5.90876 16.6249 5.909 16.6249C6.26876 16.62 6.62841 16.5379 6.95949 16.3787C7.07815 16.3216 7.19323 16.2546 7.3035 16.1777C7.34597 16.1481 7.40062 16.1413 7.44845 16.1611C7.49623 16.181 7.53014 16.2244 7.53922 16.2753C7.56281 16.4077 7.59682 16.5364 7.64036 16.6607C7.76186 17.0074 7.95761 17.3192 8.20854 17.5771C8.20871 17.5773 8.20837 17.5769 8.20854 17.5771C8.66268 18.0435 9.29793 18.3337 10.0003 18.3337C10.7027 18.3337 11.3375 18.044 11.7916 17.5776C11.7918 17.5774 11.7914 17.5778 11.7916 17.5776C12.0425 17.3198 12.2388 17.0074 12.3603 16.6607C12.4038 16.5364 12.4378 16.4077 12.4614 16.2753C12.4705 16.2244 12.5044 16.181 12.5522 16.1611C12.6 16.1413 12.6547 16.1481 12.6972 16.1777C12.8074 16.2546 12.9225 16.3216 13.0412 16.3787C13.3723 16.5379 13.7312 16.62 14.0909 16.6249C14.0912 16.6249 14.0907 16.6249 14.0909 16.6249C14.7418 16.6335 15.3962 16.3895 15.8929 15.8929C16.3895 15.3962 16.6336 14.7426 16.6249 14.0916C16.6249 14.0914 16.6249 14.0919 16.6249 14.0916C16.62 13.7319 16.5379 13.3722 16.3787 13.0412C16.3216 12.9225 16.2546 12.8074 16.1777 12.6971C16.1481 12.6547 16.1413 12.6 16.1611 12.5522C16.181 12.5044 16.2244 12.4705 16.2753 12.4614C16.4077 12.4378 16.5364 12.4038 16.6607 12.3603C17.0074 12.2388 17.3192 12.043 17.5771 11.7921C17.5773 11.7919 17.5769 11.7923 17.5771 11.7921C18.0435 11.338 18.3337 10.7027 18.3337 10.0003C18.3337 9.29793 18.044 8.6632 17.5776 8.20905C17.5774 8.20888 17.5778 8.20922 17.5776 8.20905C17.3198 7.95812 17.0074 7.76186 16.6607 7.64036C16.5364 7.59682 16.4077 7.56281 16.2753 7.53922C16.2244 7.53014 16.181 7.49623 16.1611 7.44845C16.1413 7.40062 16.1481 7.34597 16.1777 7.3035C16.2546 7.19323 16.3216 7.07815 16.3787 6.95949C16.5379 6.62841 16.62 6.26877 16.6249 5.909C16.6249 5.90876 16.6249 5.90925 16.6249 5.909ZM14.7144 5.28628C14.4257 4.9976 13.9746 4.96402 13.6506 5.19001C13.159 5.53286 12.5061 5.62468 11.9138 5.37906C11.323 5.13408 10.9259 4.60853 10.8206 4.01781C10.7513 3.6289 10.4086 3.33366 10.0003 3.33366C9.59207 3.33366 9.24934 3.6289 9.18002 4.01781C9.07472 4.60852 8.67763 5.13408 8.08686 5.37906C7.49456 5.62467 6.84169 5.53286 6.3501 5.19C6.02608 4.96402 5.57496 4.9976 5.28628 5.28628C4.9976 5.57496 4.96402 6.02607 5.19001 6.35009C5.53286 6.8417 5.62467 7.49456 5.37906 8.08686C5.13408 8.67763 4.60852 9.07472 4.01781 9.18002C3.6289 9.24934 3.33366 9.59207 3.33366 10.0003C3.33366 10.4086 3.6289 10.7513 4.01781 10.8206C4.60853 10.9259 5.13408 11.323 5.37906 11.9138C5.62467 12.5061 5.53286 13.159 5.19001 13.6506C4.96403 13.9746 4.9976 14.4257 5.28628 14.7144C5.57496 15.0031 6.02607 15.0366 6.35009 14.8106C6.84169 14.4678 7.49455 14.376 8.08686 14.6216C8.67763 14.8666 9.07472 15.3921 9.18002 15.9828C9.24935 16.3717 9.59207 16.667 10.0003 16.667C10.4086 16.667 10.7513 16.3717 10.8206 15.9828C10.9259 15.3921 11.323 14.8666 11.9138 14.6216C12.5061 14.376 13.159 14.4678 13.6506 14.8106C13.9746 15.0366 14.4257 15.0031 14.7144 14.7144C15.0031 14.4257 15.0366 13.9746 14.8106 13.6506C14.4678 13.159 14.376 12.5061 14.6216 11.9138C14.8666 11.323 15.3921 10.9259 15.9828 10.8206C16.3717 10.7513 16.667 10.4086 16.667 10.0003C16.667 9.59207 16.3717 9.24934 15.9828 9.18002C15.3921 9.07472 14.8666 8.67763 14.6216 8.08686C14.376 7.49455 14.4678 6.84169 14.8106 6.35009C15.0366 6.02607 15.0031 5.57496 14.7144 5.28628Z" fill="#72767C"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0003 11.667C10.9208 11.667 11.667 10.9208 11.667 10.0003C11.667 9.07985 10.9208 8.33366 10.0003 8.33366C9.07985 8.33366 8.33366 9.07985 8.33366 10.0003C8.33366 10.9208 9.07985 11.667 10.0003 11.667ZM10.0003 13.3337C11.8413 13.3337 13.3337 11.8413 13.3337 10.0003C13.3337 8.15938 11.8413 6.66699 10.0003 6.66699C8.15938 6.66699 6.66699 8.15938 6.66699 10.0003C6.66699 11.8413 8.15938 13.3337 10.0003 13.3337Z" fill="#72767C"/>
                            </svg>


                            <a href="#">Settings</a>
                        </div>
                    </div>
                </li>



                <li className="setting">
                    <div className="calender">
                        <div className="message">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.19058 12.5003C9.65049 12.4829 10.0374 12.8417 10.0548 13.3016C10.0939 14.3384 10.1489 15.0951 10.2029 15.6377C10.2562 16.172 10.5787 16.4935 11.0284 16.5485C11.5586 16.6133 12.3065 16.6663 13.3329 16.6663C14.3593 16.6663 15.1073 16.6133 15.6375 16.5485C16.0869 16.4935 16.4096 16.1719 16.4629 15.6374C16.5632 14.6303 16.6662 12.8904 16.6662 9.99967C16.6662 7.10899 16.5632 5.36902 16.4629 4.3619C16.4096 3.82745 16.0869 3.50581 15.6375 3.45087C15.1073 3.38605 14.3593 3.33301 13.3329 3.33301C12.3065 3.33301 11.5586 3.38605 11.0284 3.45086C10.5787 3.50583 10.2562 3.82732 10.2029 4.36165C10.1489 4.90422 10.0939 5.66095 10.0548 6.69778C10.0374 7.15769 9.65049 7.51644 9.19058 7.49908C8.73067 7.48172 8.37191 7.09481 8.38928 6.6349C8.42945 5.57071 8.48641 4.7792 8.54447 4.19644C8.66651 2.9713 9.52068 1.95609 10.8261 1.79651C11.4338 1.72223 12.2503 1.66634 13.3329 1.66634C14.4156 1.66634 15.232 1.72223 15.8397 1.79652C17.1453 1.95612 17.9993 2.9718 18.1213 4.1967C18.2288 5.27524 18.3329 7.0734 18.3329 9.99967C18.3329 12.9259 18.2288 14.7241 18.1213 15.8027C17.9993 17.0275 17.1453 18.0432 15.8397 18.2028C15.232 18.2771 14.4156 18.333 13.3329 18.333C12.2503 18.333 11.4338 18.2771 10.8261 18.2028C9.52069 18.0433 8.66651 17.0281 8.54447 15.8029C8.48641 15.2201 8.42945 14.4286 8.38928 13.3644C8.37191 12.9045 8.73067 12.5176 9.19058 12.5003Z" fill="#72767C"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.00625 12.3274C6.33168 12.6528 6.33168 13.1805 6.00625 13.5059C5.68081 13.8314 5.15317 13.8314 4.82774 13.5059L1.91107 10.5893C1.58563 10.2638 1.58563 9.73618 1.91107 9.41074L4.82774 6.49408C5.15317 6.16864 5.68081 6.16864 6.00625 6.49408C6.33168 6.81951 6.33168 7.34715 6.00625 7.67259L4.51217 9.16667H12.5003C12.9606 9.16667 13.3337 9.53976 13.3337 10C13.3337 10.4602 12.9606 10.8333 12.5003 10.8333L4.51217 10.8333L6.00625 12.3274Z" fill="#72767C"/>
                            </svg>

                            <a href="#">Log Out</a>
                        </div>
                    </div>
                </li>

            </ul>
        </div>

       
    </div>

    </>
  );
}
export default Sidebar;