import React from 'react';
import PropTypes from 'prop-types';

const COLOR_MOONPAY_CIRCLES = '#7D00FF';

const LogoMoonPay = ({
  className,
  size,
  color = 'var(--color-text-default)',
}) => {
  return (
    <svg
      size={size}
      className={className}
      viewBox="0 0 1920 350"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1790.37 287.486L1718.37 122.098H1766.58L1815.75 240.711L1872.58 122.098H1920L1807.93 349.906H1759.72L1790.37 287.486ZM1615.05 253.243C1619.31 252.274 1623.41 250.744 1627.26 248.693C1630.99 246.712 1634.45 244.272 1637.56 241.43C1640.67 238.581 1643.36 235.301 1645.54 231.691C1647.83 227.899 1649.6 223.819 1650.81 219.559C1652.12 214.91 1652.76 210.1 1652.73 205.271C1652.77 200.389 1652.13 195.525 1650.81 190.823C1649.6 186.563 1647.83 182.483 1645.54 178.691C1643.35 175.066 1640.66 171.762 1637.56 168.873C1634.48 166.006 1631.02 163.587 1627.26 161.689C1623.39 159.737 1619.28 158.263 1615.05 157.299C1610.6 156.279 1606.05 155.77 1601.48 155.782C1596.94 155.767 1592.42 156.275 1587.99 157.299C1583.81 158.263 1579.76 159.738 1575.94 161.689C1572.2 163.613 1568.74 166.029 1565.64 168.873C1562.5 171.746 1559.79 175.052 1557.58 178.691C1555.3 182.475 1553.55 186.558 1552.39 190.823C1551.13 195.534 1550.51 200.394 1550.56 205.271C1550.52 210.095 1551.14 214.901 1552.39 219.559C1553.55 223.824 1555.3 227.907 1557.58 231.691C1559.77 235.316 1562.49 238.597 1565.64 241.43C1568.78 244.248 1572.23 246.687 1575.94 248.693C1579.73 250.743 1583.79 252.274 1587.99 253.243C1592.41 254.268 1596.94 254.777 1601.48 254.76C1606.05 254.774 1610.6 254.265 1615.05 253.243V253.243ZM1566.44 290.28C1559.05 288.399 1551.94 285.554 1545.29 281.819C1532.34 274.536 1521.65 263.819 1514.4 250.849C1510.66 244.143 1507.82 236.979 1505.94 229.537C1502 213.546 1502 196.838 1505.94 180.846C1507.81 173.427 1510.65 166.288 1514.4 159.614C1521.68 146.69 1532.36 136.007 1545.29 128.723C1551.94 124.989 1559.05 122.144 1566.44 120.262C1574.34 118.258 1582.47 117.265 1590.63 117.309C1595.03 117.299 1599.43 117.566 1603.8 118.107C1607.81 118.605 1611.79 119.405 1615.69 120.502C1619.3 121.527 1622.85 122.78 1626.31 124.253C1629.54 125.63 1632.66 127.258 1635.64 129.122C1638.45 130.878 1641.07 132.91 1643.47 135.189C1645.71 137.318 1647.79 139.613 1649.69 142.053V122.098H1695.51V288.444H1649.69V268.489C1646.76 272.164 1643.41 275.486 1639.71 278.387C1635.63 281.598 1631.15 284.28 1626.39 286.369C1621.09 288.695 1615.55 290.408 1609.86 291.477C1603.52 292.678 1597.08 293.266 1590.63 293.233C1582.47 293.277 1574.34 292.285 1566.44 290.28V290.28ZM1400.11 164.243C1406.67 164.363 1413.22 163.612 1419.58 162.008C1424.54 160.755 1429.17 158.44 1433.15 155.223C1436.74 152.228 1439.49 148.349 1441.13 143.969C1442.92 139.005 1443.79 133.758 1443.69 128.484C1443.79 123.235 1442.92 118.013 1441.13 113.078C1439.49 108.745 1436.74 104.919 1433.15 101.983C1429.15 98.8142 1424.53 96.529 1419.58 95.2782C1413.22 93.6764 1406.67 92.9249 1400.11 93.0432H1355.09V164.243L1400.11 164.243ZM1307.67 53.7714H1404.58C1419.8 53.7714 1432.99 55.6339 1444.17 59.3589C1455.34 63.0839 1464.55 68.2456 1471.79 74.8441C1478.98 81.3866 1484.54 89.5366 1487.99 98.6307C1491.61 108.218 1493.43 118.394 1493.34 128.643C1493.45 138.868 1491.64 149.023 1487.99 158.576C1484.48 167.594 1478.93 175.68 1471.79 182.203C1464.55 188.856 1455.34 194.045 1444.17 197.768C1432.99 201.496 1419.8 203.358 1404.58 203.355H1355.09V288.444H1307.67V53.7714ZM1104.08 122.098H1149.57V142.053C1152.38 138.18 1155.71 134.715 1159.47 131.756C1163.45 128.635 1167.79 126.008 1172.4 123.934C1177.48 121.662 1182.82 120.001 1188.29 118.985C1194.37 117.842 1200.54 117.28 1206.73 117.309C1216.36 117.171 1225.93 118.794 1234.98 122.098C1243.04 125.068 1250.35 129.783 1256.37 135.907C1262.43 142.253 1267.01 149.857 1269.78 158.177C1272.99 167.743 1274.55 177.782 1274.41 187.87V288.444H1228.92V199.684C1229.03 193.195 1228.11 186.73 1226.2 180.527C1224.62 175.405 1221.99 170.673 1218.46 166.638C1215.07 162.889 1210.83 160.014 1206.09 158.257C1200.72 156.314 1195.04 155.367 1189.33 155.463C1183.59 155.372 1177.88 156.319 1172.48 158.257C1167.71 159.999 1163.44 162.876 1160.03 166.638C1156.51 170.673 1153.87 175.405 1152.29 180.527C1150.38 186.73 1149.47 193.195 1149.57 199.684V288.444H1104.08V122.098ZM992.117 252.764C996.46 251.714 1000.67 250.161 1004.65 248.134C1008.44 246.197 1011.91 243.694 1014.95 240.711C1017.95 237.768 1020.55 234.439 1022.69 230.813C1024.86 227.079 1026.48 223.044 1027.48 218.84C1028.56 214.291 1029.1 209.628 1029.07 204.951C1029.1 200.301 1028.57 195.664 1027.48 191.142C1025.46 182.809 1021.12 175.222 1014.95 169.272C1011.87 166.315 1008.41 163.79 1004.65 161.768C1000.7 159.649 996.485 158.066 992.117 157.059C987.379 155.971 982.531 155.435 977.669 155.463C972.861 155.441 968.066 155.977 963.381 157.059C959.036 158.056 954.847 159.64 950.929 161.768C947.205 163.804 943.769 166.327 940.712 169.272C937.701 172.17 935.145 175.507 933.129 179.169C931.07 182.931 929.462 186.924 928.34 191.063C927.134 195.593 926.543 200.264 926.584 204.952C926.557 209.638 927.147 214.308 928.34 218.841C929.433 223.015 931.041 227.037 933.129 230.814C935.17 234.459 937.724 237.792 940.712 240.711C943.729 243.681 947.173 246.183 950.929 248.135C954.88 250.17 959.061 251.724 963.381 252.765C968.058 253.901 972.856 254.463 977.669 254.441C982.535 254.469 987.387 253.907 992.117 252.765V252.764ZM950.849 290.2C942.64 288.29 934.684 285.423 927.142 281.659C920.049 278.123 913.47 273.639 907.586 268.329C901.884 263.17 896.94 257.232 892.899 250.689C888.804 244.029 885.66 236.829 883.56 229.297C879.197 213.36 879.197 196.543 883.56 180.607C885.651 173.097 888.796 165.922 892.899 159.294C896.969 152.773 901.91 146.838 907.586 141.654C913.454 136.303 920.036 131.79 927.142 128.244C934.684 124.482 942.641 121.616 950.849 119.704C968.608 115.659 987.049 115.659 1004.81 119.704C1012.97 121.599 1020.88 124.466 1028.36 128.244C1035.43 131.842 1042.01 136.351 1047.91 141.654C1053.68 146.819 1058.7 152.755 1062.84 159.294C1066.99 165.908 1070.16 173.086 1072.26 180.607C1076.62 196.543 1076.62 213.36 1072.26 229.297C1070.15 236.84 1066.98 244.043 1062.84 250.689C1058.73 257.25 1053.7 263.19 1047.91 268.329C1041.99 273.591 1035.42 278.071 1028.36 281.659C1020.9 285.431 1013.02 288.298 1004.89 290.2C987.102 294.244 968.635 294.244 950.849 290.2V290.2ZM773.31 252.764C777.653 251.715 781.859 250.161 785.842 248.134C789.631 246.197 793.103 243.694 796.139 240.711C799.145 237.768 801.748 234.439 803.881 230.813C806.058 227.079 807.672 223.045 808.671 218.84C809.756 214.291 810.292 209.628 810.267 204.951C810.295 200.301 809.759 195.664 808.671 191.142C806.658 182.809 802.311 175.222 796.139 169.272C793.063 166.315 789.599 163.79 785.842 161.768C781.892 159.649 777.678 158.065 773.31 157.059C768.572 155.971 763.724 155.435 758.862 155.463C754.054 155.441 749.26 155.977 744.575 157.059C740.229 158.056 736.04 159.64 732.122 161.768C728.399 163.805 724.963 166.328 721.906 169.272C718.894 172.171 716.338 175.507 714.323 179.169C712.265 182.932 710.657 186.924 709.533 191.063C708.327 195.592 707.737 200.264 707.777 204.951C707.75 209.638 708.34 214.308 709.533 218.84C710.628 223.014 712.236 227.036 714.323 230.813C716.363 234.459 718.917 237.792 721.906 240.711C724.923 243.68 728.366 246.182 732.122 248.134C736.073 250.169 740.254 251.724 744.575 252.764C749.252 253.9 754.05 254.463 758.862 254.441C763.728 254.469 768.58 253.906 773.31 252.764V252.764ZM732.043 290.2C723.834 288.29 715.877 285.424 708.336 281.66C701.243 278.124 694.664 273.639 688.78 268.33C683.078 263.171 678.134 257.232 674.093 250.69C669.997 244.03 666.854 236.829 664.754 229.298C660.39 213.361 660.39 196.544 664.754 180.607C666.845 173.098 669.989 165.923 674.093 159.295C678.163 152.774 683.104 146.839 688.78 141.655C694.648 136.304 701.23 131.791 708.336 128.245C715.878 124.483 723.834 121.617 732.043 119.704C749.802 115.66 768.243 115.66 786.002 119.704C794.164 121.599 802.069 124.467 809.549 128.245C816.625 131.843 823.199 136.351 829.105 141.655C834.869 146.819 839.892 152.756 844.031 159.295C848.182 165.908 851.354 173.086 853.45 180.607C857.813 196.544 857.813 213.361 853.45 229.298C851.345 236.841 848.174 244.044 844.031 250.69C839.921 257.251 834.895 263.191 829.105 268.33C823.183 273.592 816.611 278.072 809.549 281.66C802.094 285.431 794.216 288.299 786.081 290.2C768.295 294.244 749.829 294.244 732.043 290.2V290.2ZM372.943 53.7714H420.836L502.732 178.93L584.947 53.7714H632.84V288.444H585.426V127.526L517.419 231.293H488.364L420.357 127.526V288.444H372.943V53.7714Z"
        fill={color}
      />
      <path
        d="M263.588 95.7848C273.06 95.7848 282.32 92.976 290.195 87.7135C298.071 82.451 304.21 74.9712 307.835 66.2201C311.46 57.4689 312.408 47.8393 310.56 38.5491C308.712 29.2589 304.151 20.7253 297.453 14.0274C290.755 7.32951 282.221 2.7682 272.931 0.920261C263.641 -0.927678 254.011 0.020751 245.26 3.64561C236.509 7.27048 229.029 13.409 223.767 21.2848C218.504 29.1607 215.695 38.4202 215.695 47.8924C215.695 54.1819 216.934 60.4098 219.34 66.2205C221.747 72.0313 225.275 77.311 229.722 81.7583C234.169 86.2056 239.449 89.7334 245.26 92.14C251.071 94.5467 257.298 95.7852 263.588 95.7848V95.7848ZM116.738 311.48C93.6492 311.48 71.0791 304.634 51.8817 291.806C32.6842 278.979 17.7216 260.747 8.88603 239.416C0.050415 218.085 -2.26137 194.613 2.243 171.968C6.74738 149.323 17.8656 128.522 34.1917 112.196C50.5178 95.87 71.3185 84.7518 93.9635 80.2475C116.608 75.7432 140.081 78.055 161.412 86.8907C182.743 95.7263 200.975 110.689 213.802 129.886C226.629 149.084 233.476 171.654 233.475 194.743C233.476 210.073 230.457 225.253 224.59 239.417C218.724 253.58 210.125 266.449 199.285 277.289C188.445 288.13 175.575 296.728 161.412 302.595C147.248 308.461 132.068 311.48 116.738 311.48"
        fill={COLOR_MOONPAY_CIRCLES}
      />
    </svg>
  );
};

LogoMoonPay.propTypes = {
  /**
   * Additional className to add to the root svg
   */
  className: PropTypes.string.isRequired,
  /**
   * The color of the text of the logo accepts any valid css value
   */
  color: PropTypes.string,
  /**
   * The width of the logo accepts any valid css value
   */
  size: PropTypes.string,
};

export default LogoMoonPay;