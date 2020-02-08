import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NbIconLibraries} from "@nebular/theme";

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class MyIconModule {

  private packname = 'eiswind';

  constructor(private iconsLibrary: NbIconLibraries){
    if (this.iconsLibrary.getPack(this.packname)) {
      return;
    }
    this.iconsLibrary.registerSvgPack(this.packname, {
      'navigate_plus':'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" width="20px" height="20px" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="nonzero" clip-rule="evenodd" viewBox="0 0 10240 10240">' +
        '<path id="curve0" fill="#4D82B8" d="M5760 1920l-1280 0c-176,0 -320,144 -320,320l0 1920 -1920 0c-176,0 -320,144 -320,320l0 1280c0,176 144,320 320,320l1920 0 0 1920c0,176 144,320 320,320l1280 0c176,0 320,-144 320,-320l0 -1920 1920 0c176,0 320,-144 320,-320l0 -1280c0,-176 -144,-320 -320,-320l-1920 0 0 -1920c0,-176 -144,-320 -320,-320z"/>' +
        '</svg>',
      'navigate_minus':'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" width="20px" height="20px" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="nonzero" clip-rule="evenodd" viewBox="0 0 10240 10240">\n' +
        '<path id="curve0" fill="#4D82B8" d="M8320 5760l0 -1280c0,-176 -144,-320 -320,-320l-5760 0c-176,0 -320,144 -320,320l0 1280c0,176 144,320 320,320l5760 0c176,0 320,-144 320,-320z"/>\n' +
        '</svg>',
      'home': '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" width="20px" height="20px" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="nonzero" clip-rule="evenodd" viewBox="0 0 10240 10240">\n' +
        '\t<path id="curve1" fill="#808080" d="M8320 6099l0 3501 -1280 0 0 -3200 -1920 0 0 3200 -3200 0 0 -3501 3200 -3200 3200 3200zm-5760 301l0 1280 1920 0 0 -1280 -1920 0z"/>\n' +
        '\t<path id="curve0" fill="#ED9A56" d="M866 5873l188 188c124,124 328,124 452,0l3614 -3614 3614 3614c124,124 328,124 452,0l188 -188c124,-124 124,-328 0,-452l-4028 -4028c-124,-124 -328,-124 -452,0l-4028 4028c-124,124 -124,328 0,452z"/>\n' +
        '</svg>',
      'users3':'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" width="20px" height="20px" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="nonzero" clip-rule="evenodd" viewBox="0 0 10240 10240">\n' +
        '\t<path id="curve5" fill="#4D82B8" d="M9612 6264c0,543 -1152,758 -1920,758 -392,0 -883,-56 -1271,-183 381,-349 619,-850 619,-1406 0,-306 -72,-595 -200,-851 256,127 546,198 852,198 387,0 748,-114 1049,-310 568,465 871,694 871,1794z"/>\n' +
        '\t<path id="curve4" fill="#4D82B8" d="M7680 1280c884,0 1600,713 1600,1593 0,880 -716,1594 -1600,1594 -884,0 -1600,-714 -1600,-1594 0,-880 716,-1593 1600,-1593z"/>\n' +
        '\t<path id="curve3" fill="#4D82B8" d="M3837 6856c-389,128 -883,184 -1277,184 -768,0 -1920,-214 -1920,-757 0,-1099 304,-1331 871,-1795 301,196 662,311 1049,311 295,0 575,-67 825,-185 -119,248 -185,526 -185,819 0,565 246,1073 637,1423z"/>\n' +
        '\t<path id="curve2" fill="#4D82B8" d="M2560 1293c884,0 1600,714 1600,1594 0,880 -716,1593 -1600,1593 -884,0 -1600,-713 -1600,-1593 0,-880 716,-1594 1600,-1594z"/>\n' +
        '\t<path id="curve1" fill="#4D82B8" d="M7040 8834c0,544 -1152,758 -1920,758 -768,0 -1920,-214 -1920,-757 0,-1099 304,-1331 871,-1795 301,196 662,311 1049,311 387,0 748,-115 1049,-311 568,465 871,694 871,1794z"/>\n' +
        '\t<path id="curve0" fill="#4D82B8" d="M5120 3840c884,0 1600,713 1600,1593 0,880 -716,1594 -1600,1594 -884,0 -1600,-714 -1600,-1594 0,-880 716,-1593 1600,-1593z"/>\n' +
        '</svg>',
      'log_out':'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" width="20px" height="20px" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="nonzero" clip-rule="evenodd" viewBox="0 0 10240 10240">\n' +
        '\t<path id="curve1" fill="#EDC87E" d="M4060 5760l4580 0c176,0 320,144 320,320l0 640c0,176 -144,320 -320,320l-320 0 0 1280 -640 0 0 -320 -640 0 0 320 -640 0 0 -1280 -2340 0c-242,746 -894,1280 -1660,1280 -972,0 -1760,-860 -1760,-1920 0,-1060 788,-1920 1760,-1920 766,0 1418,534 1660,1280zm-1660 -320c-442,0 -800,430 -800,960 0,530 358,960 800,960 442,0 800,-430 800,-960 0,-530 -358,-960 -800,-960z"/>\n' +
        '\t<path id="curve0" fill="#E68497" d="M7322 5027l-922 -922 -921 922c-125,124 -328,124 -452,0l-453 -453c-125,-125 -125,-328 0,-452l921 -922 -921 -921c-125,-125 -125,-328 0,-452l453 -453c124,-125 327,-125 452,0l921 921 922 -921c124,-125 327,-125 452,0l453 453c124,124 124,327 0,452l-922 921 922 922c124,124 124,327 0,452l-453 453c-125,124 -328,124 -452,0z"/>\n' +
        '</svg>',

      'pencil':'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" width="20px" height="20px" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="nonzero" clip-rule="evenodd" viewBox="0 0 10240 10240">\n' +
        '\t<path id="curve2" fill="#4D82B8" d="M1222 7928l249 249 -4 10 480 480 10 -4 248 248 -907 342c-123,47 -255,23 -348,-70 -93,-93 -116,-224 -70,-347l342 -908z"/>\n' +
        '\t<path id="curve1" fill="#4D82B8" d="M1467 8187l480 480 1337 -504 -1313 -1314 -504 1338zm4781 -4754c-124,-125 -328,-125 -452,0l-2942 2942c-125,124 -125,328 0,452 125,125 328,125 453,0l2941 -2941c125,-125 125,-328 0,-453zm-226 -1131l1810 1810 -4299 4299 -1338 504 -976 -976 504 -1338 4299 -4299z"/>\n' +
        '\t<path id="curve0" fill="#E68497" d="M8963 2075l-905 -905c-249,-249 -656,-249 -905,0l-905 905 1810 1811 905 -906c250,-249 250,-655 0,-905zm-1131 -226c125,125 125,328 0,453 -125,125 -327,125 -452,0 -125,-125 -125,-328 0,-453 125,-125 327,-125 452,0z"/>\n' +
        '</svg>',
      'arrow-back': '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" width="20px" height="20px" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="nonzero" clip-rule="evenodd" viewBox="0 0 10240 10240">\n' +
        '\t<path id="curve1" fill="#4D82B8" d="M3824 5191l187 -187c539,-539 1087,-991 1758,-1230 621,-222 1310,-252 2131,13 87,28 152,86 191,169 39,83 41,169 7,255l-237 593c-63,155 -232,236 -391,187 -505,-155 -915,-140 -1271,-12 -449,160 -861,508 -1283,930l-187 187 2295 0c66,0 122,38 148,99 25,61 11,127 -35,174l-769 804c-122,127 -276,187 -453,187l-3035 0c-176,0 -320,-144 -320,-320l0 -3035c0,-177 60,-331 187,-453l804 -769c47,-46 113,-60 174,-35 61,26 99,82 99,148l0 2295z"/>\n' +
        '\t<path id="curve0" fill="#4D82B8" d="M9600 5120c0,-2474 -2006,-4480 -4480,-4480 -2474,0 -4480,2006 -4480,4480 0,2474 2006,4480 4480,4480 2474,0 4480,-2006 4480,-4480zm-4480 -3840c2121,0 3840,1719 3840,3840 0,2121 -1719,3840 -3840,3840 -2121,0 -3840,-1719 -3840,-3840 0,-2121 1719,-3840 3840,-3840z"/>\n' +
        '</svg>',
      'user_monitor': '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" width="20px" height="20px" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="nonzero" clip-rule="evenodd" viewBox="0 0 10240 10240">\n' +
        '\t<path id="curve2" fill="#4D82B8" d="M9600 7956c0,720 -1728,1004 -2880,1004 -262,0 -553,-15 -847,-46 130,-163 207,-370 207,-594l0 -2560c0,-28 -1,-55 -4,-82 206,54 422,82 644,82 519,0 1001,-154 1404,-419 961,706 1476,1064 1476,2615z"/>\n' +
        '\t<path id="curve1" fill="#4D82B8" d="M6720 960c1237,0 2240,1003 2240,2240 0,1237 -1003,2240 -2240,2240 -264,0 -517,-46 -752,-130 -157,-294 -462,-497 -815,-509 -415,-407 -673,-974 -673,-1601 0,-1237 1003,-2240 2240,-2240z"/>\n' +
        '\t<path id="curve0" fill="#808080" d="M2080 9280l160 0c176,0 320,-144 320,-320l0 0 -1280 0c-352,0 -640,-288 -640,-640l0 -2560c0,-353 288,-640 640,-640l3840 0c353,0 640,288 640,640l0 2560c0,352 -288,640 -640,640l-1280 0 0 0c0,176 144,320 320,320l160 0c88,0 160,72 160,160l0 160 -2560 0 0 -160c0,-88 72,-160 160,-160zm-800 -3520l0 2560 3840 0 0 -2560 -3840 0z"/>\n' +
        '</svg>',
      'book_open' : '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" width="20px" height="20px" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="nonzero" clip-rule="evenodd" viewBox="0 0 10240 10240">\n' +
        '\t<path id="curve0" fill="#76A797" d="M4160 8000c-640,-320 -2880,320 -3520,320 -183,0 -334,-137 -334,-320l0 -5824 320 -320 324 0c522,-1 1302,-112 1793,-275 398,-133 814,-301 1239,-301 446,0 814,185 1138,455 324,-270 692,-455 1138,-455 425,0 841,168 1239,301 491,163 1264,271 1786,271l324 0 320 320 0 5828c0,180 -147,324 -327,320 -640,0 -2880,-640 -3520,-320 0,176 -144,320 -320,320l-1280 0c-176,0 -320,-144 -320,-320zm5120 -640l7 -5173 -4 0c-607,0 -1414,-113 -1989,-305 -309,-103 -709,-268 -1036,-268 -284,0 -516,130 -728,307l-90 75 0 5168 83 -69c213,-178 444,-307 728,-307 327,0 727,165 1037,268 574,191 1381,304 1988,304l4 0zm-4480 -5364l-90 -75c-212,-177 -444,-307 -728,-307 -327,0 -727,165 -1036,268 -575,192 -1389,308 -1996,308l-4 0 -6 5174 4 0c607,0 1420,-116 1995,-308 309,-103 709,-268 1037,-268 283,0 515,129 728,307l96 80 0 -5179z"/>\n' +
        '</svg>',
      'error' : '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" width="16px" height="16px" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="nonzero" clip-rule="evenodd" viewBox="0 0 10240 10240">\n' +
        '\t<path id="curve0" fill="#D86344" d="M5120 640c2474,0 4480,2006 4480,4480 0,2474 -2006,4480 -4480,4480 -2474,0 -4480,-2006 -4480,-4480 0,-2474 2006,-4480 4480,-4480zm1829 2149c-126,-126 -331,-125 -455,3l-1422 1458 -1421 -1458c-125,-128 -329,-129 -455,-3l-508 508c-124,123 -125,324 -3,449l1439 1477 -1439 1476c-122,125 -121,326 3,450l508 507c126,126 330,125 455,-3l1421 -1458 1422 1458c124,128 329,129 455,3l508 -507c123,-124 125,-325 2,-450l-1439 -1476 1439 -1477c123,-125 121,-326 -2,-449l-508 -508z"/>\n' +
        '</svg>',
      'flashlight':'<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="16px" height="16px" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="nonzero" clip-rule="evenodd" viewBox="0 0 10240 10240" xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
        '\t<path id="curve2" fill="#FFFFFF" d="M7389 6258c250,249 199,705 -113,1018 -313,312 -769,363 -1018,113l0 0 1131 -1131 0 0zm113 1697c-125,-125 -125,-328 0,-453 125,-125 328,-125 453,0l678 679c125,125 125,327 0,452 -125,125 -327,125 -452,0l-679 -678zm603 -653c-163,-67 -241,-254 -174,-416 67,-163 254,-241 417,-174l874 362c163,67 241,253 174,416 -67,163 -254,241 -416,174l-875 -362zm305 -838c-176,0 -320,-143 -320,-320 0,-176 144,-320 320,-320l934 0c177,0 320,144 320,320 0,177 -143,320 -320,320l-934 0zm-1698 1884c-67,-163 11,-350 174,-417 162,-67 349,11 416,174l362 875c67,162 -11,349 -174,416 -163,67 -349,-11 -416,-174l-362 -874zm-888 62c0,-176 144,-320 320,-320 177,0 320,144 320,320l0 934c0,177 -143,320 -320,320 -176,0 -320,-143 -320,-320l0 -934z"/>\n' +
        '\t<path id="curve1" fill="#FFFFFF" d="M4314 3635c191,192 191,502 0,694 -192,192 -503,192 -695,0 -191,-192 -191,-502 0,-694 192,-192 503,-192 695,0z"/>\n' +
        '\t<path id="curve0" fill="#FFFFFF" d="M2411 827l2980 2980c125,125 277,188 453,188l375 0c176,0 328,63 452,187l944 944c125,125 125,328 0,453l-2036 2036c-125,125 -328,125 -453,0l-944 -944c-124,-124 -187,-276 -187,-452l0 -375c0,-176 -63,-328 -188,-453l-2980 -2980c-249,-249 -249,-656 0,-905l679 -679c249,-249 656,-249 905,0zm2129 2582c-317,-317 -830,-317 -1147,0 -317,316 -317,830 0,1146 317,317 830,317 1147,0 317,-316 317,-830 0,-1146z"/>\n' +
        '</svg>'
    });

    this.iconsLibrary.setDefaultPack(this.packname);
  }
}
