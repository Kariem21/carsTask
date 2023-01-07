import React from "react";
import "./chart3.css";

function Chart3(props) {

  return (
    <>
    <div className="chart3">
        <div className="chart3-content">
            <div className="title-top">
                <div className="component">
                <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="19" cy="19.5" r="19" fill="#A162F7" fill-opacity="0.1"/>
                <path d="M19.3835 11.6191C19.3187 11.5435 19.2243 11.5 19.1248 11.5C19.0254 11.5 18.9309 11.5435 18.8662 11.6191C18.6247 11.9015 13 18.6152 13 21.8272C13.018 23.4349 13.6729 24.9699 14.8212 26.0951C15.9695 27.2204 17.5172 27.8442 19.1249 27.8298C20.7326 27.8442 22.2804 27.2204 23.4287 26.0951C24.577 24.9699 25.2319 23.435 25.2499 21.8272C25.2499 18.6152 19.6252 11.9014 19.3837 11.6191H19.3835ZM21.3196 25.9447C21.2727 25.9701 21.2199 25.983 21.1665 25.982C21.0097 25.9811 20.8738 25.8732 20.8375 25.7207C20.8011 25.5681 20.8738 25.4104 21.0134 25.339C21.669 25.015 22.2216 24.5149 22.6092 23.8947C22.9969 23.2744 23.2042 22.5586 23.2081 21.8273C23.2081 21.6394 23.3604 21.4871 23.5484 21.4871C23.7363 21.4871 23.8886 21.6394 23.8886 21.8273C23.8852 22.6845 23.643 23.5237 23.1892 24.2511C22.7354 24.9783 22.0881 25.5647 21.3196 25.9446L21.3196 25.9447Z" fill="#A162F7"/>
                </svg>

                    {/* <div className="ellipse"></div> */}
                </div>
                <p>Break Fluid</p>
            </div>
            <svg width="112" height="113" viewBox="0 0 112 113" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M95.6591 87.6017C98.0928 89.5103 101.64 89.0975 103.296 86.4855C108.06 78.9714 110.98 70.4056 111.777 61.4906C112.742 50.7102 110.562 39.8814 105.501 30.3142C100.439 20.747 92.7144 12.8514 83.2599 7.58276C73.8055 2.31411 63.0268 -0.101856 52.228 0.627182C41.4292 1.35622 31.073 5.19902 22.4125 11.6906C13.752 18.1822 7.15823 27.0445 3.42902 37.2051C-0.300193 47.3658 -1.00505 58.3894 1.39972 68.9423C3.3884 77.6691 7.43321 85.7648 13.1639 92.5704C15.156 94.9361 18.7261 94.8684 20.8812 92.6501C23.0362 90.4317 22.9529 86.9055 21.0205 84.4907C16.8115 79.2307 13.8272 73.0689 12.3198 66.4538C10.396 58.0115 10.9598 49.1926 13.9432 41.0641C16.9266 32.9356 22.2016 25.8458 29.13 20.6525C36.0584 15.4592 44.3433 12.385 52.9824 11.8017C61.6214 11.2185 70.2444 13.1513 77.8079 17.3662C85.3715 21.5811 91.5516 27.8976 95.6004 35.5514C99.6493 43.2051 101.393 51.8682 100.622 60.4925C100.017 67.2502 97.8882 73.7571 94.4243 79.5351C92.8341 82.1878 93.2254 85.6932 95.6591 87.6017Z" fill="#F4F5F9"/>
            <path d="M20.8528 92.6224C18.6959 94.8391 15.1259 94.9041 13.1357 92.5368C9.61986 88.3549 6.72836 83.673 4.5608 78.6361C2.39323 73.5992 0.981241 68.2807 0.361475 62.8526C0.0106315 59.7797 2.51221 57.2319 5.60472 57.1896C8.69722 57.1473 11.2026 59.63 11.6301 62.6931C12.1824 66.65 13.2627 70.5237 14.8486 74.2089C16.4345 77.8942 18.5048 81.3418 20.9986 84.4632C22.929 86.8795 23.0096 90.4058 20.8528 92.6224Z" fill="#A162F7"/>
            <path d="M45.368 60.788C44.2 60.788 43.216 60.564 42.416 60.116C41.616 59.652 40.992 59.052 40.544 58.316C40.096 57.58 39.832 56.788 39.752 55.94H42.608C42.736 56.676 43.04 57.244 43.52 57.644C44.016 58.044 44.64 58.244 45.392 58.244C46.464 58.244 47.328 57.756 47.984 56.78C48.64 55.788 48.992 54.284 49.04 52.268C48.656 52.924 48.072 53.468 47.288 53.9C46.52 54.332 45.672 54.548 44.744 54.548C43.816 54.548 42.944 54.324 42.128 53.876C41.312 53.428 40.648 52.796 40.136 51.98C39.624 51.164 39.368 50.204 39.368 49.1C39.368 48.092 39.616 47.156 40.112 46.292C40.608 45.428 41.296 44.732 42.176 44.204C43.056 43.676 44.088 43.412 45.272 43.412C46.536 43.412 47.6 43.644 48.464 44.108C49.328 44.572 50.016 45.196 50.528 45.98C51.056 46.764 51.432 47.636 51.656 48.596C51.896 49.556 52.016 50.54 52.016 51.548C52.016 53.42 51.752 55.052 51.224 56.444C50.712 57.82 49.952 58.892 48.944 59.66C47.952 60.412 46.76 60.788 45.368 60.788ZM45.464 51.956C46.056 51.956 46.592 51.828 47.072 51.572C47.552 51.3 47.928 50.948 48.2 50.516C48.472 50.068 48.608 49.572 48.608 49.028C48.608 48.164 48.304 47.452 47.696 46.892C47.104 46.332 46.352 46.052 45.44 46.052C44.544 46.052 43.8 46.332 43.208 46.892C42.616 47.436 42.32 48.132 42.32 48.98C42.32 49.876 42.616 50.596 43.208 51.14C43.8 51.684 44.552 51.956 45.464 51.956ZM58.2989 51.956C57.5309 51.956 56.8349 51.788 56.2109 51.452C55.5869 51.1 55.0909 50.604 54.7229 49.964C54.3549 49.324 54.1709 48.564 54.1709 47.684C54.1709 46.804 54.3549 46.044 54.7229 45.404C55.0909 44.764 55.5869 44.276 56.2109 43.94C56.8349 43.588 57.5389 43.412 58.3229 43.412C59.0909 43.412 59.7789 43.588 60.3869 43.94C61.0109 44.276 61.5069 44.764 61.8749 45.404C62.2429 46.044 62.4269 46.804 62.4269 47.684C62.4269 48.564 62.2429 49.324 61.8749 49.964C61.5069 50.604 61.0109 51.1 60.3869 51.452C59.7629 51.788 59.0669 51.956 58.2989 51.956ZM57.3869 60.5L66.8669 43.7H69.8669L60.3869 60.5H57.3869ZM58.2989 49.82C58.7629 49.82 59.1629 49.644 59.4989 49.292C59.8349 48.924 60.0029 48.388 60.0029 47.684C60.0029 46.98 59.8349 46.444 59.4989 46.076C59.1789 45.708 58.7789 45.524 58.2989 45.524C57.8189 45.524 57.4109 45.708 57.0749 46.076C56.7549 46.444 56.5949 46.98 56.5949 47.684C56.5949 48.388 56.7549 48.924 57.0749 49.292C57.4109 49.644 57.8189 49.82 58.2989 49.82ZM69.0509 60.788C68.2829 60.788 67.5869 60.62 66.9629 60.284C66.3389 59.932 65.8429 59.436 65.4749 58.796C65.1069 58.156 64.9229 57.396 64.9229 56.516C64.9229 55.636 65.1069 54.884 65.4749 54.26C65.8429 53.62 66.3389 53.132 66.9629 52.796C67.5869 52.444 68.2909 52.268 69.0749 52.268C69.8429 52.268 70.5309 52.444 71.1389 52.796C71.7629 53.132 72.2589 53.62 72.6269 54.26C72.9949 54.884 73.1789 55.636 73.1789 56.516C73.1789 57.396 72.9949 58.156 72.6269 58.796C72.2589 59.436 71.7629 59.932 71.1389 60.284C70.5309 60.62 69.8349 60.788 69.0509 60.788ZM69.0509 58.652C69.5309 58.652 69.9309 58.476 70.2509 58.124C70.5869 57.756 70.7549 57.22 70.7549 56.516C70.7549 55.812 70.5869 55.276 70.2509 54.908C69.9309 54.54 69.5309 54.356 69.0509 54.356C68.5709 54.356 68.1629 54.54 67.8269 54.908C67.5069 55.276 67.3469 55.812 67.3469 56.516C67.3469 57.22 67.5069 57.756 67.8269 58.124C68.1629 58.476 68.5709 58.652 69.0509 58.652Z" fill="#242731"/>
            </svg>




                

        </div>
    </div>
      

    </>
  );
}
export default Chart3;