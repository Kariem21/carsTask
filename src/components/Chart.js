import React from "react";
import "./chart.css";
 
function Chart(props) {

  return (
    <>
    <div className="chart">
        <div className="chart-content">
            <div className="title-top">
                <div className="component">
                    <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="19" cy="19.5" r="19" fill="#A66FF0"/>
                    <g clip-path="url(#clip0_4339_1273)">
                    <path d="M12.4542 20.6784L20.251 9.88273C20.7668 9.16865 21.8934 9.63878 21.7486 10.5076L20.6666 16.9997H24.8701C25.55 16.9997 25.9437 17.7698 25.5457 18.3209L17.7488 29.1166C17.2331 29.8307 16.1065 29.3605 16.2513 28.4917L17.3333 21.9997H13.1297C12.4499 21.9997 12.0561 21.2295 12.4542 20.6784Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_4339_1273">
                    <rect width="20" height="20" fill="white" transform="translate(9 9.5)"/>
                    </clipPath>
                    </defs>
                    </svg>
                    {/* <div className="ellipse"></div> */}
                </div>
                <p>Energy</p>
            </div>
            <svg className="svg2" width="112" height="113" viewBox="0 0 112 113" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M95.6591 87.6017C98.0928 89.5103 101.64 89.0975 103.296 86.4855C108.06 78.9714 110.98 70.4056 111.777 61.4906C112.742 50.7102 110.562 39.8814 105.501 30.3142C100.439 20.747 92.7144 12.8514 83.2599 7.58276C73.8055 2.31411 63.0268 -0.101856 52.228 0.627182C41.4292 1.35622 31.073 5.19902 22.4125 11.6906C13.752 18.1822 7.15823 27.0445 3.42902 37.2051C-0.300193 47.3658 -1.00505 58.3894 1.39972 68.9423C3.3884 77.6691 7.43321 85.7648 13.1639 92.5704C15.156 94.9361 18.7261 94.8684 20.8812 92.6501V92.6501C23.0362 90.4317 22.9529 86.9055 21.0205 84.4907C16.8115 79.2307 13.8272 73.0689 12.3198 66.4538C10.396 58.0115 10.9598 49.1926 13.9432 41.0641C16.9266 32.9356 22.2016 25.8458 29.13 20.6525C36.0584 15.4592 44.3433 12.385 52.9824 11.8017C61.6214 11.2185 70.2444 13.1513 77.8079 17.3662C85.3715 21.5811 91.5516 27.8976 95.6004 35.5514C99.6493 43.2051 101.393 51.8682 100.622 60.4925C100.017 67.2502 97.8882 73.7571 94.4243 79.5351C92.834 82.1878 93.2254 85.6932 95.6591 87.6017V87.6017Z" fill="#B37EFC"/>
            <path d="M20.8528 92.6224C18.6959 94.8391 15.1259 94.9041 13.1356 92.5367C8.20951 86.6773 4.52379 79.8539 2.32819 72.4793C-0.40156 63.3105 -0.736942 53.5952 1.35402 44.26C3.44499 34.9248 7.89259 26.2809 14.2727 19.1526C19.4043 13.4191 25.6486 8.8199 32.6034 5.62168C35.4134 4.32953 38.6146 5.91118 39.6198 8.83608V8.83608C40.625 11.761 39.0479 14.916 36.2711 16.2779C31.1128 18.8081 26.4731 22.315 22.6181 26.6221C17.5141 32.3247 13.956 39.2398 12.2832 46.708C10.6104 54.1762 10.8788 61.9484 13.0626 69.2834C14.7119 74.8233 17.4124 79.9744 20.9985 84.4632C22.929 86.8795 23.0096 90.4058 20.8528 92.6224V92.6224Z" fill="white"/>
            <path d="M39.312 60.5V57.38H31.032V54.932L38.904 43.7H42.384V54.716H44.592V57.38H42.384V60.5H39.312ZM34.32 54.716H39.504V47.084L34.32 54.716ZM53.031 60.788C51.799 60.788 50.735 60.572 49.839 60.14C48.959 59.708 48.263 59.116 47.751 58.364C47.255 57.596 46.967 56.732 46.887 55.772H49.887C50.031 56.46 50.383 57.036 50.943 57.5C51.503 57.948 52.199 58.172 53.031 58.172C53.927 58.172 54.655 57.844 55.215 57.188C55.791 56.532 56.079 55.716 56.079 54.74C56.079 53.732 55.791 52.932 55.215 52.34C54.655 51.748 53.943 51.452 53.079 51.452C52.359 51.452 51.735 51.628 51.207 51.98C50.679 52.332 50.303 52.772 50.079 53.3H47.127L48.567 43.7H57.879V46.388H50.871L50.103 50.276C50.455 49.892 50.935 49.58 51.543 49.34C52.151 49.084 52.831 48.956 53.583 48.956C54.783 48.956 55.783 49.228 56.583 49.772C57.383 50.3 57.991 51.004 58.407 51.884C58.823 52.748 59.031 53.692 59.031 54.716C59.031 55.884 58.775 56.924 58.263 57.836C57.767 58.748 57.063 59.468 56.151 59.996C55.255 60.524 54.215 60.788 53.031 60.788ZM65.3458 51.956C64.5778 51.956 63.8818 51.788 63.2578 51.452C62.6338 51.1 62.1378 50.604 61.7698 49.964C61.4018 49.324 61.2178 48.564 61.2178 47.684C61.2178 46.804 61.4018 46.044 61.7698 45.404C62.1378 44.764 62.6338 44.276 63.2578 43.94C63.8818 43.588 64.5858 43.412 65.3698 43.412C66.1378 43.412 66.8258 43.588 67.4338 43.94C68.0578 44.276 68.5538 44.764 68.9218 45.404C69.2898 46.044 69.4738 46.804 69.4738 47.684C69.4738 48.564 69.2898 49.324 68.9218 49.964C68.5538 50.604 68.0578 51.1 67.4338 51.452C66.8098 51.788 66.1138 51.956 65.3458 51.956ZM64.4338 60.5L73.9138 43.7H76.9138L67.4338 60.5H64.4338ZM65.3458 49.82C65.8098 49.82 66.2098 49.644 66.5458 49.292C66.8818 48.924 67.0498 48.388 67.0498 47.684C67.0498 46.98 66.8818 46.444 66.5458 46.076C66.2258 45.708 65.8258 45.524 65.3458 45.524C64.8658 45.524 64.4578 45.708 64.1218 46.076C63.8018 46.444 63.6418 46.98 63.6418 47.684C63.6418 48.388 63.8018 48.924 64.1218 49.292C64.4578 49.644 64.8658 49.82 65.3458 49.82ZM76.0978 60.788C75.3298 60.788 74.6338 60.62 74.0098 60.284C73.3858 59.932 72.8898 59.436 72.5218 58.796C72.1538 58.156 71.9698 57.396 71.9698 56.516C71.9698 55.636 72.1538 54.884 72.5218 54.26C72.8898 53.62 73.3858 53.132 74.0098 52.796C74.6338 52.444 75.3378 52.268 76.1218 52.268C76.8898 52.268 77.5778 52.444 78.1858 52.796C78.8098 53.132 79.3058 53.62 79.6738 54.26C80.0418 54.884 80.2258 55.636 80.2258 56.516C80.2258 57.396 80.0418 58.156 79.6738 58.796C79.3058 59.436 78.8098 59.932 78.1858 60.284C77.5778 60.62 76.8818 60.788 76.0978 60.788ZM76.0978 58.652C76.5778 58.652 76.9778 58.476 77.2978 58.124C77.6338 57.756 77.8018 57.22 77.8018 56.516C77.8018 55.812 77.6338 55.276 77.2978 54.908C76.9778 54.54 76.5778 54.356 76.0978 54.356C75.6178 54.356 75.2098 54.54 74.8738 54.908C74.5538 55.276 74.3938 55.812 74.3938 56.516C74.3938 57.22 74.5538 57.756 74.8738 58.124C75.2098 58.476 75.6178 58.652 76.0978 58.652Z" fill="white"/>
            </svg>

                

        </div>
    </div>
      

    </>
  );
}
export default Chart;