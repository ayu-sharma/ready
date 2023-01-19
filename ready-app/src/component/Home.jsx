import React from 'react'
import {Link} from 'react-router-dom'
import Navbarlogin from './Navbarlogin'

function Home() {
  return (
   <div> 
    <Navbarlogin/>
   <div className='mt-10 mb-48'> 
    {/* <h1 className='text-white text-center text-9xl mt-20'>R</h1> */}
      <div className='flex flex-col justify-center items-center'>
        <svg className='mx-auto' id="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="250" height="250" viewBox="0, 0, 400,400"><g id="svgg"><path id="path0" d="M53.200 200.000 L 53.200 360.400 85.600 360.400 C 104.402 360.400,118.000 360.250,118.000 360.042 C 118.000 359.689,186.973 290.695,187.520 290.500 C 188.024 290.320,256.800 359.053,256.800 359.736 C 256.800 360.351,260.078 360.400,300.809 360.400 L 344.818 360.400 344.226 359.500 C 343.403 358.249,188.024 203.425,187.459 203.292 C 187.206 203.233,171.256 218.944,152.013 238.205 C 131.066 259.172,116.780 273.178,116.413 273.107 C 115.459 272.923,115.273 103.584,116.226 102.631 C 117.190 101.667,286.524 101.860,286.710 102.826 C 286.784 103.211,273.819 116.444,253.115 137.116 L 219.400 170.780 241.303 192.690 L 263.206 214.600 304.691 173.100 C 327.509 150.275,346.317 131.600,346.488 131.600 C 346.659 131.600,346.795 110.900,346.790 85.600 L 346.781 39.600 199.990 39.600 L 53.200 39.600 53.200 200.000 " stroke="none" fill="#fcfcfc" fill-rule="evenodd"></path><path id="path1" d="M116.662 103.131 C 115.783 104.103,115.622 272.280,116.500 272.617 C 116.780 272.724,132.545 257.262,152.292 237.511 L 187.584 202.212 265.996 280.603 C 309.122 323.718,344.511 359.320,344.638 359.719 C 344.879 360.479,345.644 360.469,345.900 359.701 C 346.062 359.213,188.256 201.200,187.606 201.200 C 186.899 201.200,185.519 202.485,178.603 209.581 C 155.156 233.639,117.866 270.462,117.540 269.879 C 116.858 268.660,117.314 104.425,118.000 103.992 C 119.269 103.190,284.085 103.497,283.645 104.300 C 283.435 104.685,268.578 119.666,250.631 137.592 C 232.684 155.517,218.000 170.413,218.000 170.693 C 218.000 171.575,262.311 215.600,263.200 215.600 C 264.018 215.600,346.800 133.215,346.800 132.400 C 346.800 131.459,344.277 133.921,305.000 173.200 C 282.341 195.860,263.531 214.400,263.199 214.400 C 262.868 214.400,252.788 204.589,240.799 192.598 L 219.000 170.797 252.705 137.099 C 271.567 118.240,286.325 103.180,286.217 102.900 C 285.857 101.961,117.513 102.191,116.662 103.131 M152.699 325.501 C 133.835 344.366,118.400 359.936,118.400 360.101 C 118.400 361.079,122.326 357.277,153.203 326.397 C 185.357 294.240,187.250 292.422,188.083 292.897 C 189.055 293.452,199.743 304.143,206.562 311.382 C 213.520 318.768,223.286 328.400,223.818 328.400 C 224.087 328.400,224.401 328.760,224.516 329.200 C 224.631 329.640,225.012 330.000,225.363 330.000 C 225.713 330.000,226.000 330.237,226.000 330.527 C 226.000 331.032,234.467 339.600,234.967 339.600 C 235.282 339.600,243.600 347.915,243.600 348.230 C 243.600 348.362,245.245 350.029,247.255 351.935 C 249.266 353.841,252.054 356.525,253.452 357.900 C 255.800 360.209,256.800 360.864,256.800 360.093 C 256.800 359.482,187.923 291.200,187.306 291.200 C 187.137 291.200,171.564 306.635,152.699 325.501 " stroke="none" fill="#c1c1c1" fill-rule="evenodd"></path><path id="path2" d="M116.229 102.628 C 115.661 103.197,115.610 110.466,115.699 178.129 L 115.798 253.000 115.900 178.430 C 115.994 109.739,116.054 103.803,116.663 103.130 C 117.513 102.191,285.857 101.962,286.217 102.900 C 286.325 103.180,271.567 118.240,252.705 137.099 L 219.000 170.797 241.000 192.699 L 262.999 214.600 241.200 192.690 L 219.400 170.779 253.115 137.116 C 273.819 116.444,286.784 103.211,286.710 102.826 C 286.524 101.863,117.191 101.666,116.229 102.628 M343.882 133.738 C 342.827 134.872,324.287 153.530,302.682 175.200 L 263.400 214.600 304.984 173.200 C 327.855 150.430,346.650 131.755,346.750 131.700 C 346.851 131.645,346.678 131.617,346.367 131.638 C 346.055 131.659,344.937 132.604,343.882 133.738 M152.198 237.605 C 132.840 256.967,116.780 272.724,116.509 272.621 C 116.148 272.482,115.985 270.318,115.895 264.516 L 115.773 256.600 115.787 264.795 C 115.798 271.831,115.887 273.006,116.413 273.107 C 116.780 273.178,131.075 259.165,152.010 238.213 C 171.252 218.956,187.176 203.207,187.397 203.216 C 187.619 203.224,223.116 238.459,266.280 281.516 C 309.444 324.572,344.601 359.530,344.407 359.200 C 343.999 358.507,187.868 202.400,187.583 202.400 C 187.479 202.400,171.556 218.242,152.198 237.605 M115.709 254.800 C 115.709 255.790,115.787 256.195,115.882 255.700 C 115.978 255.205,115.978 254.395,115.882 253.900 C 115.787 253.405,115.709 253.810,115.709 254.800 M152.828 324.923 C 133.814 343.902,118.198 359.607,118.126 359.823 C 118.054 360.039,133.519 344.688,152.494 325.708 C 171.469 306.729,187.133 291.200,187.304 291.200 C 187.722 291.200,201.151 304.388,231.379 334.481 C 245.235 348.275,256.652 359.481,256.751 359.382 C 256.937 359.197,187.959 290.394,187.601 290.407 C 187.490 290.411,171.843 305.943,152.828 324.923 " stroke="none" fill="#f4f4f4" fill-rule="evenodd"></path><path id="path3" d="" stroke="none" fill="#e8fc100" fill-rule="evenodd"></path><path id="path4" d="" stroke="none" fill="#e8fc100" fill-rule="evenodd"></path></g></svg>
        {/* <svg className='m-auto' id="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="400" height="400" viewBox="0, 0, 400,400"><g id="svgg"><path id="path0" d="M144.899 164.299 L 145.000 224.600 157.300 224.800 C 165.651 224.936,169.601 224.867,169.600 224.585 C 169.600 224.004,194.751 199.198,195.329 199.210 C 195.588 199.216,201.560 204.974,208.600 212.006 L 221.400 224.792 237.433 224.796 C 246.252 224.798,253.593 224.674,253.747 224.519 C 254.000 224.267,195.703 166.020,195.184 166.006 C 195.065 166.003,189.179 171.850,182.104 179.000 C 175.029 186.150,168.962 192.000,168.620 192.000 C 168.065 192.000,168.000 188.607,168.000 159.600 L 168.000 127.200 200.400 127.200 C 226.100 127.200,232.800 127.304,232.800 127.701 C 232.800 127.977,227.221 133.782,220.402 140.601 C 213.583 147.421,208.003 153.182,208.002 153.404 C 208.000 153.915,223.901 169.826,224.169 169.581 C 224.279 169.482,231.307 162.472,239.788 154.005 L 255.208 138.610 255.104 121.405 L 255.000 104.200 199.899 104.099 L 144.797 103.997 144.899 164.299 M233.200 268.400 C 233.200 268.933,233.467 269.200,234.000 269.200 C 234.533 269.200,234.800 268.933,234.800 268.400 C 234.800 267.867,234.533 267.600,234.000 267.600 C 233.467 267.600,233.200 267.867,233.200 268.400 " stroke="none" fill="#fcfcfc" fill-rule="evenodd"></path><path id="path1" d="M143.867 103.067 C 143.720 103.213,143.600 130.933,143.600 164.667 L 143.600 226.000 156.400 226.000 C 164.542 226.000,169.200 225.857,169.200 225.606 C 169.200 225.358,164.642 225.172,156.900 225.106 L 144.600 225.000 144.600 164.400 L 144.600 103.800 200.000 103.800 L 255.400 103.800 255.504 121.408 L 255.608 139.016 240.203 154.408 C 231.730 162.874,224.483 169.851,224.099 169.914 C 223.641 169.989,220.579 167.195,215.223 161.814 C 206.720 153.273,206.800 153.348,206.800 154.002 C 206.800 154.807,223.180 170.800,224.004 170.800 C 224.535 170.800,230.228 165.380,240.606 154.991 L 256.400 139.183 256.400 120.991 L 256.400 102.800 200.267 102.800 C 169.393 102.800,144.013 102.920,143.867 103.067 M168.667 127.867 C 168.520 128.013,168.403 142.458,168.406 159.967 C 168.410 180.667,168.548 191.590,168.800 191.200 C 169.042 190.826,169.190 178.888,169.194 159.500 L 169.200 128.400 199.887 128.400 L 230.575 128.400 228.200 130.800 C 226.894 132.120,225.953 133.200,226.110 133.200 C 226.266 133.200,227.669 131.940,229.228 130.400 L 232.061 127.600 200.497 127.600 C 183.137 127.600,168.813 127.720,168.667 127.867 M194.000 164.800 C 194.000 165.020,194.460 165.200,195.022 165.200 C 195.745 165.200,196.747 165.916,198.444 167.645 C 199.764 168.989,200.912 170.022,200.995 169.939 C 201.416 169.517,195.838 164.400,194.957 164.400 C 194.431 164.400,194.000 164.580,194.000 164.800 M182.466 212.265 C 175.572 219.195,170.023 224.957,170.135 225.068 C 170.247 225.180,175.931 219.675,182.766 212.834 L 195.194 200.397 208.005 213.198 L 220.815 226.000 238.208 226.000 L 255.600 226.000 255.600 224.973 C 255.600 224.018,237.751 205.716,237.279 206.188 C 237.195 206.271,241.103 210.311,245.963 215.163 C 250.824 220.016,254.800 224.151,254.800 224.351 C 254.800 225.116,253.065 225.200,237.163 225.200 L 220.791 225.200 208.000 212.400 C 200.965 205.360,195.162 199.615,195.105 199.633 C 195.047 199.651,189.360 205.335,182.466 212.265 M234.000 202.943 C 234.000 203.356,236.012 205.322,236.220 205.113 C 236.314 205.019,235.854 204.426,235.196 203.796 C 234.538 203.166,234.000 202.782,234.000 202.943 " stroke="none" fill="#888888" fill-rule="evenodd"></path><path id="path2" d="M229.190 130.900 C 225.261 134.466,217.484 142.120,212.393 147.430 C 210.299 149.613,208.140 151.722,207.594 152.115 C 206.876 152.631,206.739 152.915,207.099 153.138 C 207.474 153.369,226.807 134.569,232.767 128.179 C 232.858 128.080,232.810 128.000,232.659 128.000 C 232.508 128.000,230.947 129.305,229.190 130.900 M241.598 152.300 L 228.600 165.400 241.700 152.402 C 248.905 145.254,254.800 139.359,254.800 139.302 C 254.800 139.020,253.677 140.125,241.598 152.300 M208.000 154.104 C 208.000 154.161,211.555 157.716,215.900 162.004 L 223.800 169.800 216.004 161.900 C 208.760 154.560,208.000 153.819,208.000 154.104 M188.405 171.265 C 185.322 174.381,182.800 177.086,182.800 177.277 C 182.800 177.467,179.650 180.760,175.800 184.594 C 171.950 188.429,168.800 191.686,168.800 191.832 C 168.800 192.349,170.323 190.874,182.575 178.500 C 189.382 171.625,195.053 166.003,195.176 166.006 C 195.644 166.018,253.795 224.061,253.700 224.422 C 253.645 224.630,253.795 224.800,254.033 224.800 C 255.197 224.800,213.831 182.418,198.302 167.700 C 195.019 164.588,195.007 164.592,188.405 171.265 M226.185 167.700 L 224.200 169.800 226.300 167.815 C 228.251 165.971,228.583 165.600,228.285 165.600 C 228.222 165.600,227.277 166.545,226.185 167.700 M209.800 213.585 C 215.960 219.846,221.045 225.051,221.100 225.151 C 221.155 225.251,221.283 225.250,221.385 225.149 C 221.486 225.047,216.401 219.842,210.085 213.582 L 198.600 202.200 209.800 213.585 M174.794 219.100 L 169.400 224.600 174.900 219.206 C 177.925 216.239,180.400 213.764,180.400 213.706 C 180.400 213.419,179.806 213.991,174.794 219.100 " stroke="none" fill="#d4d4d4" fill-rule="evenodd"></path><path id="path3" d="M229.067 130.655 C 227.807 131.895,226.837 132.970,226.911 133.044 C 226.985 133.118,228.110 132.104,229.410 130.790 C 230.711 129.475,231.681 128.400,231.567 128.400 C 231.452 128.400,230.327 129.415,229.067 130.655 M209.689 149.827 C 208.967 150.582,208.527 151.200,208.710 151.200 C 208.893 151.200,209.654 150.570,210.400 149.800 C 211.146 149.030,211.587 148.412,211.378 148.427 C 211.170 148.443,210.410 149.073,209.689 149.827 M175.851 183.851 C 172.147 187.480,169.205 190.539,169.315 190.648 C 169.424 190.757,172.521 187.854,176.197 184.197 C 179.873 180.540,182.814 177.481,182.733 177.400 C 182.652 177.319,179.555 180.222,175.851 183.851 M198.000 202.200 C 199.195 203.410,200.263 204.400,200.373 204.400 C 200.483 204.400,199.595 203.410,198.400 202.200 C 197.205 200.990,196.137 200.000,196.027 200.000 C 195.917 200.000,196.805 200.990,198.000 202.200 M204.200 208.400 C 206.171 210.380,207.873 212.000,207.983 212.000 C 208.093 212.000,206.571 210.380,204.600 208.400 C 202.629 206.420,200.927 204.800,200.817 204.800 C 200.707 204.800,202.229 206.420,204.200 208.400 M183.792 210.500 L 180.200 214.200 183.900 210.608 C 187.336 207.272,187.782 206.800,187.492 206.800 C 187.432 206.800,185.767 208.465,183.792 210.500 M214.600 218.800 C 217.894 222.100,220.680 224.800,220.790 224.800 C 220.900 224.800,218.294 222.100,215.000 218.800 C 211.706 215.500,208.920 212.800,208.810 212.800 C 208.700 212.800,211.306 215.500,214.600 218.800 M244.800 214.244 C 244.800 214.452,246.105 215.877,247.700 217.411 L 250.600 220.200 247.800 217.211 C 246.260 215.567,244.955 214.142,244.900 214.044 C 244.845 213.947,244.800 214.036,244.800 214.244 M171.409 222.791 C 170.331 223.886,169.527 224.839,169.624 224.908 C 169.721 224.978,170.682 224.082,171.760 222.918 C 174.239 220.240,174.005 220.156,171.409 222.791 M156.300 225.097 C 157.895 225.173,160.505 225.173,162.100 225.097 C 163.695 225.021,162.390 224.959,159.200 224.959 C 156.010 224.959,154.705 225.021,156.300 225.097 M166.900 225.076 C 167.285 225.176,167.915 225.176,168.300 225.076 C 168.685 224.975,168.370 224.893,167.600 224.893 C 166.830 224.893,166.515 224.975,166.900 225.076 M153.378 280.835 C 152.966 281.502,153.893 282.267,154.445 281.715 C 154.907 281.253,154.618 280.400,154.000 280.400 C 153.806 280.400,153.526 280.596,153.378 280.835 " stroke="none" fill="#cccccc" fill-rule="evenodd"></path><path id="path4" d="M144.585 104.099 C 144.480 104.374,144.441 131.690,144.497 164.800 L 144.600 225.000 149.101 225.021 L 153.601 225.041 149.201 224.907 L 144.800 224.774 144.800 164.387 L 144.800 104.000 199.996 104.000 L 255.191 104.000 255.302 120.500 L 255.413 137.000 255.407 120.400 L 255.400 103.800 200.088 103.699 C 156.049 103.618,144.737 103.699,144.585 104.099 M168.480 127.680 C 168.113 128.047,168.023 135.656,168.096 159.980 L 168.193 191.800 168.396 159.800 L 168.600 127.800 200.325 127.698 C 224.321 127.620,231.980 127.708,231.763 128.059 C 231.584 128.350,231.651 128.415,231.945 128.234 C 232.202 128.075,232.309 127.777,232.183 127.572 C 231.814 126.975,169.079 127.081,168.480 127.680 M239.800 154.400 C 231.442 162.760,224.335 169.600,224.006 169.600 C 223.677 169.600,219.806 166.045,215.404 161.700 L 207.400 153.800 215.396 161.900 C 219.794 166.355,223.661 170.000,223.989 170.000 C 224.318 170.000,231.525 163.070,240.005 154.600 C 248.485 146.130,255.328 139.200,255.210 139.200 C 255.092 139.200,248.158 146.040,239.800 154.400 M190.988 203.213 C 189.024 205.186,187.550 206.800,187.714 206.800 C 188.113 206.800,194.915 199.982,194.715 199.782 C 194.629 199.696,192.952 201.239,190.988 203.213 M175.007 219.193 C 174.152 220.069,173.530 220.852,173.626 220.932 C 173.722 221.013,174.569 220.297,175.509 219.340 C 176.449 218.383,177.071 217.600,176.890 217.600 C 176.710 217.600,175.863 218.317,175.007 219.193 M227.925 225.099 C 231.293 225.166,236.693 225.166,239.925 225.099 C 243.156 225.032,240.400 224.977,233.800 224.977 C 227.200 224.977,224.556 225.032,227.925 225.099 M248.500 225.094 C 249.545 225.176,251.255 225.176,252.300 225.094 C 253.345 225.012,252.490 224.944,250.400 224.944 C 248.310 224.944,247.455 225.012,248.500 225.094 " stroke="none" fill="#acacac" fill-rule="evenodd"></path></g></svg> */}
       <h1 className='font-bold text-4xl text-white mb-2'>R E A D Y</h1>
      </div>
      
    <p className='text-white text-center text-lg tracking-widest font-light'>Just what you need</p>
    <div className="sellbtn flex justify-center flex-col md:flex-row items-center sm:my-5">
      <Link to="/buyer-signup"><p className='font-semibold drop-shadow-md text-white md:text-center md:mx-24 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br ease-in-out transition duration-200 py-2 md:px-10 rounded-full mt-5 p-8 cursor-pointer'>BUY</p></Link>
      <Link to="/seller-signup"><p className='font-semibold drop-shadow-md text-white md:text-center md:mx-24 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br ease-in-out transition duration-200 py-2 md:px-10 rounded-full mt-5 p-8 cursor-pointer'>SELL</p></Link>
    </div>
    </div>
    </div>
  )
}

export default Home