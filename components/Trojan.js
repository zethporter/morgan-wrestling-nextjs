import React, { useState } from 'react';
import SvgIcon from "@mui/material/SvgIcon";

const TrojanHead = (props, { fill }) => {

    const memorizedIcon = React.useMemo(() => {
        return(
            <SvgIcon {...props} viewBox={"0 0 24 24"}>
            <g transform="matrix(.15128 0 0 .15498 -13.774 -4.5519)">
                <g>
                    <path d="m92.8 63.035 23.899 11.227s4.2526 1.4459 6.3789-0.68041 22.539-14.799 36.402-14.204c0 0 21.093-2.2113 34.701 5.6134 0 0 11.992 5.4433 20.327 18.456 0 0 12.758 18.796 2.6366 44.652 0 0-4.1675 3.9124 0.93557 7.4845 0 0 13.013 15.82 15.479 16.925 0 0 10.121 9.6108 13.353 10.887 0 0 1.9562 2.1263 0.85052-1.616 0 0-7.1443-17.606-3.317-35.466 0 0 4.8479-41.675-3.0619-56.985l-0.85052-1.9562-21.986 9.058 20.88-10.929-11.61-15.139-19.434 15.139 18.371-16.16-11.822-8.0799s-2.6791-1.9137-5.2307 1.6585l-12.46 15.182s-1.4459 1.1482-0.55284-0.51031l13.438-18.754-11.269-4.1675-12.077 21.008-0.89304-0.25516 9.6534-21.858-9.2706-2.5941s-2.7642-0.72294-3.8273 3.7848l-6.1237 18.881-0.51031-0.08505 4.2951-23.177-10.206-0.1701s-1.701 0-1.7436 1.9562l-0.80799 19.987-0.68041 0.08505s-0.80799-2.1688-0.51031-4.1675l0.34021-15.777s0.46778-1.9137-2.7642-1.5309h-7.7822s-1.8286 0.42526-1.616 1.9137l1.1482 20.753h-0.93557l-3.2745-22.028-10.759 2.5941s-2.6366 0.38273-1.9137 3.5722l5.1881 18.031-0.55283 0.08505-9.4407-20.157-11.312 4.8905 10.419 19.009-0.80799 0.42526-12.673-18.456-13.778 8.4201 16.84 14.544-17.478-10.972s-1.4884-1.7436-4.0825-0.04253c0 0-5.6559 3.6997-8.6327 8.0799 0 0-1.0631 1.3183 0.51031 1.616z" fill="#51232e" strokeWidth="0" />
                    <path d="m144.77 182.69 3.6015-0.0936s4.303-4.0224 12.956-6.7352c0 0 15.014-2.1047 17.914-3.695 0 0 12.909-4.8175 14.593-6.4078 0 0 5.6594-5.7062 11.88-1.9644 0 0 33.536 1.9177 35.36 0.74836 0 0 1.637-0.14032 0.23386-0.98222 0 0-11.974-9.4948-15.107-14.92l-11.366-13.798s-1.8709-1.9177-0.46772-5.7998c0 0 8.355-12.054 2.005-34.676 0 0-2.3812-14.618-21.696-26.524 0 0-11.245-8.9297-37.571-6.6807 0 0-16.14 0.99219-32.544 13.56 0 0-3.5285 1.1877-0.6052 2.8481l3.0402 2.2217s0.98221 0.39756-0.0935 1.333l-10.875 12.535s-0.70158 0.93544-3.274 1.4967c0 0-3.8353-0.21048-4.6071 5.3554l-2.2217 10.711s-0.63143 1.3564 1.0524 0.79512l12.979-2.5491s1.3096-0.60804 0.63142 1.2395l-10.407 18.452s-1.9878 3.7886 1.2395 4.2095l4.3966 0.88867s-2.1515 6.8521-1.1927 10.524c0 0 1.5435 1.7306-0.0468 4.3264 0 0-6.1272 10.266 7.6239 8.7698 0 0 7.0392-0.4911 10.734-1.5201 0 0 3.8353-1.3096 6.2675 2.7596 0 0 4.8643 6.3142 6.6884 7.1561 0 0 4.8643 4.0692 0.60804 11.74l-1.748 3.8484s-0.29594 0.58281 0.0174 0.82884z" fill="#51232e" stroke="#51232e" strokeWidth=".365" />
                    <path d="m154.13 120.63 6.813 22.225s1.7859-0.66146 3.1088 0.33073c0 0 28.046 11.046 31.089 13.229 0 0 18.587 7.5406 36.579 6.0193 0 0 8.0698 0.52916 0.52917-3.4396l-21.894-25.863s-1.3891-1.1906 0.33072-3.3734c0 0 7.6068-10.054 5.9531-23.482 0 0-1.1906-16.735-12.303-27.781 0 0-8.8635-10.782-28.773-14.751 0 0-17.33-3.3734-35.586 4.5641 0 0-10.848 5.2917-10.914 5.887 0 0-2.3151 0.85989-0.59532 2.8443l2.3812 1.9182s10.385-6.9453 14.288-7.6729c0 0 13.494-5.887 30.096-2.6458 0 0 17.793 1.6536 30.229 20.241 0 0 10.12 15.28 3.9688 34.33l-1.1906 2.712s-1.0583 1.5875-1.2568-0.8599c0 0 0.26458-3.4396 0.92604-4.6302 0 0 2.9766-14.883-0.26458-22.027 0 0-2.1828-9.7896-13.163-18.984 0 0-8.0036-8.7974-29.435-9.7234 0 0-11.642-1.3229-26.723 6.4823 0 0-12.171 6.35-16.801 14.288l-2.9766 3.7042s0 0.46302 0.46302 0.19843c0 0 8.7864-10.553 13.651-12.19l-10.009 11.88 0.93544 0.70158s10.617-11.74 14.78-12.395c0 0-7.9045 6.7352-9.1206 11.693l4.5369-0.14031s1.7773 0.18708 3.8353-1.9644c0 0 9.9157-8.5593 12.722-8.5593 0 0 1.5435-0.5145 0.3274 0.98221 0 0-7.39 4.8175-9.9625 8.1851l-1.4032 2.1515s14.967-0.93544 26.613 5.332c0 0 5.332 3.0402 8.7464 0.74835 0 0 2.7596-2.7596 5.6594-0.0935l2.3854 1.9176s2.1048 0.79513 0.70158 5.1449c0 0-1.4032 1.637 1.4032 4.116l5.0046 6.0336s0.51449 0.28063-0.0936 1.4032c0 0-0.4209 1.0758-1.7773-0.46772 0 0-3.695-5.1917-4.8643-6.0336 0 0-1.3564-2.3854-3.9756-0.37418 0 0-1.637 2.5257-6.5013-0.0468 0 0-2.1983-1.5902-2.4322-2.2918 0 0-1.4499-1.6838-0.32741-5.5659 0 0 1.1225-0.98222-0.79512-1.3096 0 0-22.825-11.225-52.946-6.1739 0 0-3.9756-0.51449-4.6304 3.274 0 0-1.637 5.6127-1.8709 5.753 0 0-0.56126 2.5257-0.28063 3.0402 0 0 25.257-4.116 29.092-2.8999 0 0 16.932-1.8709 33.021 10.945 0 0 2.6426 1.754-0.70159 2.1048z" fill="#ffffffff" stroke="#51232e" strokeWidth=".765" />
                    <path d="m122.23 144.94s-1.2161 1.7306-1.8709 2.9466c0 0-1.3096 3.087-2.7128 3.7418 0 0-3.695 3.8821 1.5435 4.0692 0 0 8.0916-0.8419 9.027-1.5435 0 0 19.738-6.1739 20.86-6.3142 0 0 2.5725-1.2628 3.8353-1.0758 0 0 3.8353-0.3274 2.8999-3.3208 0 0-1.6838-13.517-6.6884-21.562 0 0-1.6838-1.4499-1.5902-3.8353l16.932-1.2628s-8.0448-7.1562-20.018-7.4368c0 0 0.98221 2.5725-1.9644 2.7596 0 0-4.4901-0.60804-5.9401-0.23386 0 0-2.8531 0.56126-4.303 2.3854 0 0-0.0935 1.3096-3.2273 0 0 0-3.087-1.5435-4.0692-2.4322 0 0-2.1983-1.6838-3.9289 1.637l-8.9335 17.072s12.114-2.4789 6.1739 7.0158c0 0 5.6594 0.42095 6.782 0.3274 0 0 4.4434-0.46772 7.2029 2.4789 0 0 1.1693 0.70158-1.3096 0.98221 0 0-5.9401-0.3274-7.2497-0.98221 0 0-4.0224-0.42095-5.332 2.1983 0 0 1.2628 1.1225 4.116 1.1693 0 0 0 0.79513-0.23386 1.2161z" fill="#ffffffff" strokeWidth="0" />
                    <path d="m124.52 123.85 0.0935 0.5145h0.74836l2.2451 4.8175s-0.3274 1.1225 1.637 1.8709c0 0 6.0804 1.0758 8.3254 7.4368 0 0 0.60804 2.3386 1.2628 0 0 0 0.70158-2.7596-1.8241-4.7708 0 0-3.6015-2.6192-5.2852-5.4256l-3.9756-5.2385s0-0.98222-1.3096-0.32741z" fill="#51232e" stroke="#51232e" strokeWidth=".465" />
                </g>
                <g fill="#ffffffff">
                    <path d="m156.18 167.3 2.9466-5.2385s1.1225-1.7773-1.4967-2.0112c0 0-2.2451-0.28063-3.0402 0 0 0-1.5435-0.42095-2.1515 2.0112 0 0-0.74836 2.1983 0.23386 4.6304 0 0 1.1693 3.7885 3.5079 0.60803z" stroke="#ffffffff" strokeWidth=".565" />
                    <path d="m168.81 154.58s-5.2385 3.1805-9.5883 12.348c0 0-4.5369 7.6706 3.087 5.6127 0 0 15.528-4.5837 17.352-4.4434 0 0 4.9111-0.65481 3.1805-5.0046 0 0-1.3096-0.46772-1.5435-3.4611 0 0-0.51449-3.7418-2.1047-5.4723 0 0-4.303-5.753-10.383 0.42094z" stroke="#ffffffff" strokeWidth=".365" />
                    <path d="m172.39 105.02s-1.6206 2.5797 0.79375 5.2255c0 0 1.6206 2.0836 5.6555 0 0 0 1.8852-0.89296 2.4805-2.9435 0 0 1.1245-1.5875-1.2237-3.638 0 0-3.3734-3.3073-5.7878-0.76067 0 0-1.5544 1.356-1.9182 2.1167z" stroke="#51232e" strokeWidth=".565" />
                    <path d="m174.97 105.94s-0.49609 1.1576 0.52917 2.1167c0 0 0.69453 0.72761 2.282-0.23151 0 0 1.4552-0.62838 0.66146-2.2159 0 0-0.59531-0.89297-0.99219-1.0253 0 0-0.69453-0.69454-1.2568 0.23151 0 0-1.2568 0.9591-1.2237 1.1245z" stroke="#51232e" strokeWidth=".965" />
                </g>
                <path d="m202.44 97.049s2.1983 14.593-0.93544 22.638c0 0 0.0935 1.1693-0.60804 2.4322 0 0 7.2029-8.1851 1.8709-26.146 0 0-0.88868-2.1048-0.32741 1.0758z" fill="#51232e" stroke="#51232e" strokeWidth=".26458px" />
                <path d="m206 98.78s1.4499 12.956-1.4499 23.152c0 0-1.2628 3.8821 0.8419 0.5145 0 0 4.3966-10.196 1.1225-24.275 0 0-0.70158-4.2095-0.51449 0.60804z" fill="#51232e" stroke="#51232e" strokeWidth=".26458px" />
            </g>
        </SvgIcon>
        )
    }, [fill])

    return memorizedIcon
}

export default TrojanHead