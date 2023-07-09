/**
 * A helper class for providing SVG markup for premade animations to display.
 */
export class SVG {
    /**
     * The lookup table of SVG art.
     */
    private static readonly artTable: { [key: string]: string } = {
        premade1: `<svg class="art-premade" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" id="blobSvg" style="opacity: 1;" filter="" transform="rotate(-33)">
        <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color: rgb(4, 115, 251); --darkreader-inline-stopcolor: #36a0fc;" data-darkreader-inline-stopcolor=""></stop>
                <stop offset="100%" style="stop-color: rgb(194, 113, 225); --darkreader-inline-stopcolor: #c271e1;" data-darkreader-inline-stopcolor=""></stop>
            </linearGradient>
        </defs>
                            
        <path id="blob" fill="url(#gradient)" style="opacity: 0.33;">
            <animate attributeName="d" dur="5s" repeatCount="indefinite" values="M423.42552,332.41134Q414.82268,414.82268,332.41134,424.30554Q250,433.78841,170.96572,420.92848Q91.93144,
            408.06856,46.07152,329.03428Q0.21159,250,66.88003,191.77423Q133.54846,133.54846,191.77423,102.82861Q250,72.10876,305.00592,106.04846Q360.01185,139.98815,396.0201,
            194.99408Q432.02836,250,423.42552,332.41134Z;M449.66467,329.57458Q409.14917,409.14917,329.57458,407.97733Q250,406.80549,191.3735,387.02924Q132.74701,367.25299,
            77.06026,308.6265Q21.3735,250,49.05191,163.36516Q76.73032,76.73032,163.36516,85.537Q250,94.34367,322.00775,100.16408Q394.01551,105.98449,442.09784,177.99225Q490.18018,250,
            449.66467,329.57458Z;M449.05134,329.9003Q409.80059,409.80059,329.9003,451.15995Q250,492.5193,162.89881,458.36084Q75.79762,424.20238,65.04837,337.10119Q54.29911,250,85.74629,
            183.59673Q117.19347,117.19347,183.59673,88.1905Q250,59.18753,328.8549,75.73886Q407.7098,92.2902,448.00594,171.1451Q488.30208,250,449.05134,329.9003Z;M421.63508,307.39005Q364.
            7801,364.7801,307.39005,427.43403Q250,490.08796,191.6822,428.36178Q133.3644,366.6356,70.9089,308.3178Q8.4534,250,54.21728,174.99058Q99.98115,99.98115,174.99058,81.49686Q250,
            63.01257,330.66021,75.84607Q411.32042,88.67958,444.90524,169.33979Q478.49006,250,421.63508,307.39005Z;M423.42552,332.41134Q414.82268,414.82268,332.41134,424.30554Q250,
            433.78841,170.96572,420.92848Q91.93144,408.06856,46.07152,329.03428Q0.21159,250,66.88003,191.77423Q133.54846,133.54846,191.77423,102.82861Q250,72.10876,305.00592,
            106.04846Q360.01185,139.98815,396.0201,194.99408Q432.02836,250,423.42552,332.41134Z">
            </animate>
        </path>
        <path id="blob" fill="url(#gradient)" style="opacity: 0.33;">
            <animate attributeName="d" dur="5s" repeatCount="indefinite" values="M446.86448,329.36764Q408.73529,408.73529,329.36764,419.76576Q250,430.79624,166.60504,423.79308Q83.21008,
            416.78992,69.36975,333.39496Q55.52942,250,96.13341,193.3687Q136.7374,136.7374,193.3687,119.10083Q250,101.46426,313.50105,112.23108Q377.00211,122.99789,430.99789,186.49895Q484.99368,
            250,446.86448,329.36764Z;M405.0078,325.44624Q400.89248,400.89248,325.44624,434.97549Q250,469.0585,165.42535,444.1039Q80.8507,419.1493,84.75627,334.57465Q88.66184,250,94.44262,175.1117Q100.2234,
            100.2234,175.1117,82.29749Q250,64.37159,306.73538,100.45042Q363.47075,136.52925,386.29693,193.26462Q409.12312,250,405.0078,325.44624Z;M449.05134,329.9003Q409.80059,409.80059,329.9003,
            451.15995Q250,492.5193,162.89881,458.36084Q75.79762,424.20238,65.04837,337.10119Q54.29911,250,85.74629,183.59673Q117.19347,117.19347,183.59673,88.1905Q250,59.18753,328.8549,75.73886Q407.7098,
            92.2902,448.00594,171.1451Q488.30208,250,449.05134,329.9003Z;M418.08664,320.33435Q390.6687,390.6687,320.33435,427.91946Q250,465.17023,188.27506,419.31005Q126.55013,373.44987,106.38448,
            311.72494Q86.21883,250,84.09726,165.98785Q81.9757,81.9757,165.98785,53.98938Q250,26.00305,311.1687,76.83282Q372.3374,127.6626,408.92099,188.8313Q445.50458,250,418.08664,320.33435Z;
            M446.86448,329.36764Q408.73529,408.73529,329.36764,419.76576Q250,430.79624,166.60504,423.79308Q83.21008,416.78992,69.36975,333.39496Q55.52942,250,96.13341,193.3687Q136.7374,136.7374,
            193.3687,119.10083Q250,101.46426,313.50105,112.23108Q377.00211,122.99789,430.99789,186.49895Q484.99368,250,446.86448,329.36764Z">
            </animate>
        </path>
        <path id="blob" fill="url(#gradient)" style="opacity: 0.33;">
            <animate attributeName="d" dur="5s" repeatCount="indefinite" values="M385.47259,309.13613Q368.27225,368.27225,309.13613,425.14983Q250,482.02741,183.02911,432.9846Q116.05821,383.94179,100.85787,
            316.97089Q85.65753,250,111.11302,193.28426Q136.56852,136.56852,193.28426,70.4846Q250,4.40068,303.89298,73.30736Q357.78596,142.21404,380.22944,196.10702Q402.67293,250,385.47259,309.13613Z;M421.63508,
            307.39005Q364.7801,364.7801,307.39005,427.43403Q250,490.08796,191.6822,428.36178Q133.3644,366.6356,70.9089,308.3178Q8.4534,250,54.21728,174.99058Q99.98115,99.98115,174.99058,81.49686Q250,63.01257,
            330.66021,75.84607Q411.32042,88.67958,444.90524,169.33979Q478.49006,250,421.63508,307.39005Z;M449.05134,329.9003Q409.80059,409.80059,329.9003,451.15995Q250,492.5193,162.89881,458.36084Q75.79762,
            424.20238,65.04837,337.10119Q54.29911,250,85.74629,183.59673Q117.19347,117.19347,183.59673,88.1905Q250,59.18753,328.8549,75.73886Q407.7098,92.2902,448.00594,171.1451Q488.30208,250,449.05134,
            329.9003Z;M418.08664,320.33435Q390.6687,390.6687,320.33435,427.91946Q250,465.17023,188.27506,419.31005Q126.55013,373.44987,106.38448,311.72494Q86.21883,250,84.09726,165.98785Q81.9757,81.9757,
            165.98785,53.98938Q250,26.00305,311.1687,76.83282Q372.3374,127.6626,408.92099,188.8313Q445.50458,250,418.08664,320.33435Z;M385.47259,309.13613Q368.27225,368.27225,309.13613,425.14983Q250,
            482.02741,183.02911,432.9846Q116.05821,383.94179,100.85787,316.97089Q85.65753,250,111.11302,193.28426Q136.56852,136.56852,193.28426,70.4846Q250,4.40068,303.89298,73.30736Q357.78596,142.21404,
            380.22944,196.10702Q402.67293,250,385.47259,309.13613Z">
            </animate>
        </path></svg>`,
        premade2: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%"
        id="blobSvg" style="opacity: 1;" filter="blur(0px)" transform="rotate(-139)">
        <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%"
                    style="stop-color: rgb(91, 164, 253); --darkreader-inline-stopcolor: #5ab1fd;"
                    data-darkreader-inline-stopcolor=""></stop>
                <stop offset="100%"
                    style="stop-color: rgb(242, 40, 227); --darkreader-inline-stopcolor: #f338e5;"
                    data-darkreader-inline-stopcolor=""></stop>
            </linearGradient>
        </defs>
        <path id="blob" fill="url(#gradient)" style="opacity: 0.3;">
            <animate attributeName="d" dur="10s" repeatCount="indefinite"
                values="M409.06419,322.5266Q395.0532,395.0532,322.5266,445.11739Q250,495.18159,163.51944,459.07135Q77.03888,422.96112,82.39949,336.48056Q87.7601,250,115.64271,196.76266Q143.52532,
                143.52532,196.76266,76.83657Q250,10.14783,323.24578,56.82813Q396.49156,103.50844,409.78338,176.75422Q423.07519,250,409.06419,322.5266Z;M446.86448,329.36764Q408.73529,408.73529,
                329.36764,419.76576Q250,430.79624,166.60504,423.79308Q83.21008,416.78992,69.36975,333.39496Q55.52942,250,96.13341,193.3687Q136.7374,136.7374,193.3687,119.10083Q250,101.46426,
                313.50105,112.23108Q377.00211,122.99789,430.99789,186.49895Q484.99368,250,446.86448,329.36764Z;M423.42552,332.41134Q414.82268,414.82268,332.41134,424.30554Q250,433.78841,170.96572,
                420.92848Q91.93144,408.06856,46.07152,329.03428Q0.21159,250,66.88003,191.77423Q133.54846,133.54846,191.77423,102.82861Q250,72.10876,305.00592,106.04846Q360.01185,139.98815,396.0201,
                194.99408Q432.02836,250,423.42552,332.41134Z;M418.08664,320.33435Q390.6687,390.6687,320.33435,427.91946Q250,465.17023,188.27506,419.31005Q126.55013,373.44987,106.38448,
                311.72494Q86.21883,250,84.09726,165.98785Q81.9757,81.9757,165.98785,53.98938Q250,26.00305,311.1687,76.83282Q372.3374,127.6626,408.92099,188.8313Q445.50458,250,418.08664,
                320.33435Z;M405.0078,325.44624Q400.89248,400.89248,325.44624,434.97549Q250,469.0585,165.42535,444.1039Q80.8507,419.1493,84.75627,334.57465Q88.66184,250,94.44262,175.1117Q100.2234,
                100.2234,175.1117,82.29749Q250,64.37159,306.73538,100.45042Q363.47075,136.52925,386.29693,193.26462Q409.12312,250,405.0078,325.44624Z;M408.24461,332.63257Q415.26513,415.26513,332.63257,
                434.71568Q250,454.16622,179.33614,422.74697Q108.67228,391.32772,65.87585,320.66386Q23.07942,250,63.27221,176.73251Q103.46501,103.46501,176.73251,63.02288Q250,22.58075,311.86507,
                74.4253Q373.73015,126.26985,387.47712,188.13493Q401.22409,250,408.24461,332.63257Z;M395.5,320Q390,390,320,400Q250,410,172,408Q94,406,59,328Q24,250,70.5,183.5Q117,117,183.5,108Q250,99,335,
                89.5Q420,80,410.5,165Q401,250,395.5,320Z;M421.63508,307.39005Q364.7801,364.7801,307.39005,427.43403Q250,490.08796,191.6822,428.36178Q133.3644,366.6356,70.9089,308.3178Q8.4534,250,54.21728,
                174.99058Q99.98115,99.98115,174.99058,81.49686Q250,63.01257,330.66021,75.84607Q411.32042,88.67958,444.90524,169.33979Q478.49006,250,421.63508,307.39005Z;M449.66467,329.57458Q409.14917,
                409.14917,329.57458,407.97733Q250,406.80549,191.3735,387.02924Q132.74701,367.25299,77.06026,308.6265Q21.3735,250,49.05191,163.36516Q76.73032,76.73032,163.36516,85.537Q250,94.34367,322.00775,
                100.16408Q394.01551,105.98449,442.09784,177.99225Q490.18018,250,449.66467,329.57458Z;M449.05134,329.9003Q409.80059,409.80059,329.9003,451.15995Q250,492.5193,162.89881,458.36084Q75.79762,
                424.20238,65.04837,337.10119Q54.29911,250,85.74629,183.59673Q117.19347,117.19347,183.59673,88.1905Q250,59.18753,328.8549,75.73886Q407.7098,92.2902,448.00594,171.1451Q488.30208,250,449.05134,
                329.9003Z;M409.06419,322.5266Q395.0532,395.0532,322.5266,445.11739Q250,495.18159,163.51944,459.07135Q77.03888,422.96112,82.39949,336.48056Q87.7601,250,115.64271,196.76266Q143.52532,143.52532,
                196.76266,76.83657Q250,10.14783,323.24578,56.82813Q396.49156,103.50844,409.78338,176.75422Q423.07519,250,409.06419,322.5266Z"></animate>
        </path>
        <path id="blob" fill="url(#gradient)" style="opacity: 0.3;">
            <animate attributeName="d" dur="10s" repeatCount="indefinite"
                values="M449.66467,329.57458Q409.14917,409.14917,329.57458,407.97733Q250,406.80549,191.3735,387.02924Q132.74701,367.25299,77.06026,308.6265Q21.3735,250,49.05191,163.36516Q76.73032,76.73032,
                163.36516,85.537Q250,94.34367,322.00775,100.16408Q394.01551,105.98449,442.09784,177.99225Q490.18018,250,449.66467,329.57458Z;M408.24461,332.63257Q415.26513,415.26513,332.63257,434.71568Q250,
                454.16622,179.33614,422.74697Q108.67228,391.32772,65.87585,320.66386Q23.07942,250,63.27221,176.73251Q103.46501,103.46501,176.73251,63.02288Q250,22.58075,311.86507,74.4253Q373.73015,126.26985,
                387.47712,188.13493Q401.22409,250,408.24461,332.63257Z;M405.0078,325.44624Q400.89248,400.89248,325.44624,434.97549Q250,469.0585,165.42535,444.1039Q80.8507,419.1493,84.75627,334.57465Q88.66184,
                250,94.44262,175.1117Q100.2234,100.2234,175.1117,82.29749Q250,64.37159,306.73538,100.45042Q363.47075,136.52925,386.29693,193.26462Q409.12312,250,405.0078,325.44624Z;M418.08664,320.33435Q390.6687,
                390.6687,320.33435,427.91946Q250,465.17023,188.27506,419.31005Q126.55013,373.44987,106.38448,311.72494Q86.21883,250,84.09726,165.98785Q81.9757,81.9757,165.98785,53.98938Q250,26.00305,311.1687,
                76.83282Q372.3374,127.6626,408.92099,188.8313Q445.50458,250,418.08664,320.33435Z;M395.5,320Q390,390,320,400Q250,410,172,408Q94,406,59,328Q24,250,70.5,183.5Q117,117,183.5,108Q250,99,335,89.5Q420,
                80,410.5,165Q401,250,395.5,320Z;M421.63508,307.39005Q364.7801,364.7801,307.39005,427.43403Q250,490.08796,191.6822,428.36178Q133.3644,366.6356,70.9089,308.3178Q8.4534,250,54.21728,174.99058Q99.98115,
                99.98115,174.99058,81.49686Q250,63.01257,330.66021,75.84607Q411.32042,88.67958,444.90524,169.33979Q478.49006,250,421.63508,307.39005Z;M449.05134,329.9003Q409.80059,409.80059,329.9003,451.15995Q250,
                492.5193,162.89881,458.36084Q75.79762,424.20238,65.04837,337.10119Q54.29911,250,85.74629,183.59673Q117.19347,117.19347,183.59673,88.1905Q250,59.18753,328.8549,75.73886Q407.7098,92.2902,448.00594,
                171.1451Q488.30208,250,449.05134,329.9003Z;M409.06419,322.5266Q395.0532,395.0532,322.5266,445.11739Q250,495.18159,163.51944,459.07135Q77.03888,422.96112,82.39949,336.48056Q87.7601,250,115.64271,
                196.76266Q143.52532,143.52532,196.76266,76.83657Q250,10.14783,323.24578,56.82813Q396.49156,103.50844,409.78338,176.75422Q423.07519,250,409.06419,322.5266Z;M385.47259,309.13613Q368.27225,368.27225,
                309.13613,425.14983Q250,482.02741,183.02911,432.9846Q116.05821,383.94179,100.85787,316.97089Q85.65753,250,111.11302,193.28426Q136.56852,136.56852,193.28426,70.4846Q250,4.40068,303.89298,
                73.30736Q357.78596,142.21404,380.22944,196.10702Q402.67293,250,385.47259,309.13613Z;M446.86448,329.36764Q408.73529,408.73529,329.36764,419.76576Q250,430.79624,166.60504,423.79308Q83.21008,
                416.78992,69.36975,333.39496Q55.52942,250,96.13341,193.3687Q136.7374,136.7374,193.3687,119.10083Q250,101.46426,313.50105,112.23108Q377.00211,122.99789,430.99789,186.49895Q484.99368,250,446.86448,
                329.36764Z;M449.66467,329.57458Q409.14917,409.14917,329.57458,407.97733Q250,406.80549,191.3735,387.02924Q132.74701,367.25299,77.06026,308.6265Q21.3735,250,49.05191,163.36516Q76.73032,76.73032,
                163.36516,85.537Q250,94.34367,322.00775,100.16408Q394.01551,105.98449,442.09784,177.99225Q490.18018,250,449.66467,329.57458Z"></animate>
        </path>
        <path id="blob" fill="url(#gradient)" style="opacity: 0.3;">
            <animate attributeName="d" dur="10s" repeatCount="indefinite"
                values="M449.66467,329.57458Q409.14917,409.14917,329.57458,407.97733Q250,406.80549,191.3735,387.02924Q132.74701,367.25299,77.06026,308.6265Q21.3735,250,49.05191,163.36516Q76.73032,76.73032,
                163.36516,85.537Q250,94.34367,322.00775,100.16408Q394.01551,105.98449,442.09784,177.99225Q490.18018,250,449.66467,329.57458Z;M405.0078,325.44624Q400.89248,400.89248,325.44624,434.97549Q250,
                469.0585,165.42535,444.1039Q80.8507,419.1493,84.75627,334.57465Q88.66184,250,94.44262,175.1117Q100.2234,100.2234,175.1117,82.29749Q250,64.37159,306.73538,100.45042Q363.47075,136.52925,386.29693,
                193.26462Q409.12312,250,405.0078,325.44624Z;M418.08664,320.33435Q390.6687,390.6687,320.33435,427.91946Q250,465.17023,188.27506,419.31005Q126.55013,373.44987,106.38448,311.72494Q86.21883,250,
                84.09726,165.98785Q81.9757,81.9757,165.98785,53.98938Q250,26.00305,311.1687,76.83282Q372.3374,127.6626,408.92099,188.8313Q445.50458,250,418.08664,320.33435Z;M421.63508,307.39005Q364.7801,
                364.7801,307.39005,427.43403Q250,490.08796,191.6822,428.36178Q133.3644,366.6356,70.9089,308.3178Q8.4534,250,54.21728,174.99058Q99.98115,99.98115,174.99058,81.49686Q250,63.01257,330.66021,
                75.84607Q411.32042,88.67958,444.90524,169.33979Q478.49006,250,421.63508,307.39005Z;M408.24461,332.63257Q415.26513,415.26513,332.63257,434.71568Q250,454.16622,179.33614,422.74697Q108.67228,
                391.32772,65.87585,320.66386Q23.07942,250,63.27221,176.73251Q103.46501,103.46501,176.73251,63.02288Q250,22.58075,311.86507,74.4253Q373.73015,126.26985,387.47712,188.13493Q401.22409,250,
                408.24461,332.63257Z;M385.47259,309.13613Q368.27225,368.27225,309.13613,425.14983Q250,482.02741,183.02911,432.9846Q116.05821,383.94179,100.85787,316.97089Q85.65753,250,111.11302,193.28426Q136.56852,
                136.56852,193.28426,70.4846Q250,4.40068,303.89298,73.30736Q357.78596,142.21404,380.22944,196.10702Q402.67293,250,385.47259,309.13613Z;M409.06419,322.5266Q395.0532,395.0532,322.5266,445.11739Q250,
                495.18159,163.51944,459.07135Q77.03888,422.96112,82.39949,336.48056Q87.7601,250,115.64271,196.76266Q143.52532,143.52532,196.76266,76.83657Q250,10.14783,323.24578,56.82813Q396.49156,103.50844,409.78338,
                176.75422Q423.07519,250,409.06419,322.5266Z;M395.5,320Q390,390,320,400Q250,410,172,408Q94,406,59,328Q24,250,70.5,183.5Q117,117,183.5,108Q250,99,335,89.5Q420,80,410.5,165Q401,250,395.5,320Z;M449.05134,
                329.9003Q409.80059,409.80059,329.9003,451.15995Q250,492.5193,162.89881,458.36084Q75.79762,424.20238,65.04837,337.10119Q54.29911,250,85.74629,183.59673Q117.19347,117.19347,183.59673,88.1905Q250,59.18753,
                328.8549,75.73886Q407.7098,92.2902,448.00594,171.1451Q488.30208,250,449.05134,329.9003Z;M423.42552,332.41134Q414.82268,414.82268,332.41134,424.30554Q250,433.78841,170.96572,420.92848Q91.93144,408.06856,
                46.07152,329.03428Q0.21159,250,66.88003,191.77423Q133.54846,133.54846,191.77423,102.82861Q250,72.10876,305.00592,106.04846Q360.01185,139.98815,396.0201,194.99408Q432.02836,250,423.42552,332.41134Z;M449.66467,
                329.57458Q409.14917,409.14917,329.57458,407.97733Q250,406.80549,191.3735,387.02924Q132.74701,367.25299,77.06026,308.6265Q21.3735,250,49.05191,163.36516Q76.73032,76.73032,163.36516,85.537Q250,94.34367,
                322.00775,100.16408Q394.01551,105.98449,442.09784,177.99225Q490.18018,250,449.66467,329.57458Z"></animate>
        </path>
        </svg>`,
        premade3: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%"
        id="blobSvg" style="opacity: 1;" filter="blur(0.4px)" transform="rotate(-109)">
        <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%"
                    style="stop-color: rgb(16, 213, 255); --darkreader-inline-stopcolor: #25d9ff;"
                    data-darkreader-inline-stopcolor=""></stop>
                <stop offset="100%"
                    style="stop-color: rgb(41, 117, 239); --darkreader-inline-stopcolor: #3a97f0;"
                    data-darkreader-inline-stopcolor=""></stop>
            </linearGradient>
        </defs>
        <path id="blob" fill="url(#gradient)" style="opacity: 0.64;">
            <animate attributeName="d" dur="10s" repeatCount="indefinite"
                values="M460.19079,314.81752Q429.48296,379.63503,366.74655,397.33779Q304.01014,415.04055,238.62673,450.6401Q173.24331,486.23965,
                141.80231,418.853Q110.3613,351.46635,87.51337,300.73317Q64.66545,250,86.56406,198.80231Q108.46268,147.60462,149.75669,107.39355Q191.05069,
                67.18248,258.9189,40.41566Q326.7871,13.64883,381.21107,64.45621Q435.63503,115.26359,463.26683,182.63179Q490.89862,250,460.19079,
                314.81752Z;M410.95278,296.31131Q377.83016,342.62262,346.59668,396.40799Q315.3632,450.19336,253.66275,438.70512Q191.9623,427.21687,
                143.72172,394.79004Q95.48115,362.3632,86.24057,306.1816Q77,250,74.51885,185.3632Q72.0377,120.72639,123.0377,68.91975Q174.0377,
                17.1131,239.88914,47.47163Q305.74057,77.83016,366.40332,99.75233Q427.06607,121.67451,435.57074,185.83725Q444.0754,250,410.95278,
                296.31131Z;M469.34657,320.38487Q443.8468,390.76973,373.53877,402.1156Q303.23073,413.46147,238.88463,448.30757Q174.53853,483.15367,
                122.76833,431.6929Q70.99814,380.23213,76.84563,315.11607Q82.69313,250,78.9227,186.3071Q75.15227,122.6142,131.92223,91.73003Q188.6922,
                60.84587,253.2305,51.539Q317.7688,42.23213,359.5759,90.92433Q401.383,139.61653,448.11467,194.80827Q494.84633,250,469.34657,
                320.38487Z;M437.48517,301.93698Q392.82947,353.87396,357.50371,413.21131Q322.17795,472.54867,247.51112,479.51159Q172.8443,486.47452,
                129.54819,427.64458Q86.25209,368.81464,81.57785,309.40732Q76.90361,250,83.86283,191.93327Q90.82205,133.86654,141.98146,104.152Q193.14087,
                74.43745,247.01483,83.88926Q300.88878,93.34106,355.51112,113.62234Q410.13346,133.90361,446.13717,191.95181Q482.14087,250,437.48517,
                301.93698Z;M424.84079,321.86371Q447.86386,393.72743,384.56836,431.15935Q321.27286,468.59128,248.86371,472.84107Q176.45457,477.09086,
                148.84107,410.1135Q121.22757,343.13614,67.95457,296.56807Q14.68157,250,76.45485,209.5685Q138.22813,169.13699,166.2505,123.59142Q194.27286,
                78.04585,249.70464,79.81828Q305.13643,81.59072,362.47721,103.93179Q419.818,126.27286,410.81786,188.13643Q401.81772,250,424.84079,
                321.86371Z;M403.5,294Q372,338,343,393Q314,448,254,435.5Q194,423,138,397.5Q82,372,88,311Q94,250,86,187.5Q78,125,134,95.5Q190,66,253,57Q316,
                48,362,91.5Q408,135,421.5,192.5Q435,250,403.5,294Z;M453.70516,317.0107Q433.36186,384.02139,362.52423,381.146Q291.6866,378.27061,242.8433,
                399.93801Q194,421.60541,117.08118,412.14317Q40.16237,402.68093,64.29201,326.34046Q88.42165,250,109.0107,206.32693Q129.59975,162.65387,
                148.64317,78.76495Q167.6866,-5.12397,241.8433,20.74072Q316,46.60541,350.8433,99.17023Q385.6866,151.73505,429.86753,200.86753Q474.04846,
                250,453.70516,317.0107Z;M428.88107,298.41731Q382.87896,346.83463,343.6411,381.94757Q304.40324,417.06052,249.73188,417.66327Q195.06052,
                418.26602,121.90324,407.33463Q48.74595,396.40324,42.90922,323.20162Q37.07249,250,50.04223,182.03624Q63.01197,114.07249,129.2076,98.49191Q195.40324,
                82.91133,251.0746,78.83673Q306.74595,74.76214,356.50598,105.64321Q406.26602,136.52427,440.5746,193.26214Q474.88318,250,428.88107,298.41731Z;M460.19079,
                314.81752Q429.48296,379.63503,366.74655,397.33779Q304.01014,415.04055,238.62673,450.6401Q173.24331,486.23965,141.80231,418.853Q110.3613,351.46635,
                87.51337,300.73317Q64.66545,250,86.56406,198.80231Q108.46268,147.60462,149.75669,107.39355Q191.05069,67.18248,258.9189,40.41566Q326.7871,13.64883,
                381.21107,64.45621Q435.63503,115.26359,463.26683,182.63179Q490.89862,250,460.19079,314.81752Z"></animate>
        </path>
        <path id="blob" fill="url(#gradient)" style="opacity: 0.64;">
            <animate attributeName="d" dur="10s" repeatCount="indefinite"
                values="M437.48517,301.93698Q392.82947,353.87396,357.50371,413.21131Q322.17795,472.54867,247.51112,479.51159Q172.8443,486.47452,129.54819,
                427.64458Q86.25209,368.81464,81.57785,309.40732Q76.90361,250,83.86283,191.93327Q90.82205,133.86654,141.98146,104.152Q193.14087,74.43745,
                247.01483,83.88926Q300.88878,93.34106,355.51112,113.62234Q410.13346,133.90361,446.13717,191.95181Q482.14087,250,437.48517,301.93698Z;M469.34657,
                320.38487Q443.8468,390.76973,373.53877,402.1156Q303.23073,413.46147,238.88463,448.30757Q174.53853,483.15367,122.76833,431.6929Q70.99814,380.23213,
                76.84563,315.11607Q82.69313,250,78.9227,186.3071Q75.15227,122.6142,131.92223,91.73003Q188.6922,60.84587,253.2305,51.539Q317.7688,42.23213,359.5759,
                90.92433Q401.383,139.61653,448.11467,194.80827Q494.84633,250,469.34657,320.38487Z;M402.82336,294.74662Q372.52122,339.49324,339.45366,380.77461Q306.3861,
                422.05598,251.70463,416.9165Q197.02317,411.77702,159.66506,377.28619Q122.30695,342.79537,72.75579,296.39768Q23.20463,250,37.88851,178.24662Q52.57238,
                106.49324,117.0304,72.97924Q181.48842,39.46525,238.53957,73.79537Q295.59073,108.12549,332.49083,135.50917Q369.39092,162.89286,401.2582,206.44643Q433.12549,
                250,402.82336,294.74662Z;M403.5,294Q372,338,343,393Q314,448,254,435.5Q194,423,138,397.5Q82,372,88,311Q94,250,86,187.5Q78,125,134,95.5Q190,66,253,57Q316,
                48,362,91.5Q408,135,421.5,192.5Q435,250,403.5,294Z;M428.88107,298.41731Q382.87896,346.83463,343.6411,381.94757Q304.40324,417.06052,249.73188,417.66327Q195.06052,
                418.26602,121.90324,407.33463Q48.74595,396.40324,42.90922,323.20162Q37.07249,250,50.04223,182.03624Q63.01197,114.07249,129.2076,98.49191Q195.40324,82.91133,
                251.0746,78.83673Q306.74595,74.76214,356.50598,105.64321Q406.26602,136.52427,440.5746,193.26214Q474.88318,250,428.88107,298.41731Z;M439.43806,316.51312Q432.44085,
                383.02623,370.39398,407.14258Q308.3471,431.25893,240.13979,459.78516Q171.93248,488.31139,132.30301,426.26451Q92.67355,364.21763,63.21484,307.10882Q33.75613,
                250,44.06194,178.90151Q54.36774,107.80301,118.67355,75.31613Q182.97935,42.82924,240.60882,72.66602Q298.23828,102.50279,368.10882,107.87054Q437.97935,113.23828,
                442.20731,181.61914Q446.43527,250,439.43806,316.51312Z;M410.95278,296.31131Q377.83016,342.62262,346.59668,396.40799Q315.3632,450.19336,253.66275,438.70512Q191.9623,
                427.21687,143.72172,394.79004Q95.48115,362.3632,86.24057,306.1816Q77,250,74.51885,185.3632Q72.0377,120.72639,123.0377,68.91975Q174.0377,17.1131,239.88914,
                47.47163Q305.74057,77.83016,366.40332,99.75233Q427.06607,121.67451,435.57074,185.83725Q444.0754,250,410.95278,296.31131Z;M423.38828,307.00416Q406.39243,
                364.00831,353.55217,384.57202Q300.71191,405.13573,242.06787,430.50416Q183.42382,455.87258,116.5554,425.63666Q49.68697,395.40075,58.87581,322.70037Q68.06464,
                250,86.66067,197.31625Q105.2567,144.63251,148.86843,108.53648Q192.48015,72.44045,252.10019,66.13989Q311.72022,59.83933,378.54063,84.21929Q445.36105,108.59925,
                442.87258,179.29963Q440.38412,250,423.38828,307.00416Z;M437.48517,301.93698Q392.82947,353.87396,357.50371,413.21131Q322.17795,472.54867,247.51112,479.51159Q172.8443,
                486.47452,129.54819,427.64458Q86.25209,368.81464,81.57785,309.40732Q76.90361,250,83.86283,191.93327Q90.82205,133.86654,141.98146,104.152Q193.14087,74.43745,
                247.01483,83.88926Q300.88878,93.34106,355.51112,113.62234Q410.13346,133.90361,446.13717,191.95181Q482.14087,250,437.48517,301.93698Z"></animate>
        </path>
        <path id="blob" fill="url(#gradient)" style="opacity: 0.64;">
            <animate attributeName="d" dur="10s" repeatCount="indefinite"
                values="M428.88107,298.41731Q382.87896,346.83463,343.6411,381.94757Q304.40324,417.06052,249.73188,417.66327Q195.06052,418.26602,121.90324,407.33463Q48.74595,396.40324,
                42.90922,323.20162Q37.07249,250,50.04223,182.03624Q63.01197,114.07249,129.2076,98.49191Q195.40324,82.91133,251.0746,78.83673Q306.74595,74.76214,356.50598,105.64321Q406.26602,
                136.52427,440.5746,193.26214Q474.88318,250,428.88107,298.41731Z;M410.95278,296.31131Q377.83016,342.62262,346.59668,396.40799Q315.3632,450.19336,253.66275,438.70512Q191.9623,
                427.21687,143.72172,394.79004Q95.48115,362.3632,86.24057,306.1816Q77,250,74.51885,185.3632Q72.0377,120.72639,123.0377,68.91975Q174.0377,17.1131,239.88914,47.47163Q305.74057,
                77.83016,366.40332,99.75233Q427.06607,121.67451,435.57074,185.83725Q444.0754,250,410.95278,296.31131Z;M469.34657,320.38487Q443.8468,390.76973,373.53877,402.1156Q303.23073,
                413.46147,238.88463,448.30757Q174.53853,483.15367,122.76833,431.6929Q70.99814,380.23213,76.84563,315.11607Q82.69313,250,78.9227,186.3071Q75.15227,122.6142,131.92223,
                91.73003Q188.6922,60.84587,253.2305,51.539Q317.7688,42.23213,359.5759,90.92433Q401.383,139.61653,448.11467,194.80827Q494.84633,250,469.34657,320.38487Z;M403.5,294Q372,
                338,343,393Q314,448,254,435.5Q194,423,138,397.5Q82,372,88,311Q94,250,86,187.5Q78,125,134,95.5Q190,66,253,57Q316,48,362,91.5Q408,135,421.5,192.5Q435,250,403.5,294Z;M423.38828,
                307.00416Q406.39243,364.00831,353.55217,384.57202Q300.71191,405.13573,242.06787,430.50416Q183.42382,455.87258,116.5554,425.63666Q49.68697,395.40075,58.87581,322.70037Q68.06464,
                250,86.66067,197.31625Q105.2567,144.63251,148.86843,108.53648Q192.48015,72.44045,252.10019,66.13989Q311.72022,59.83933,378.54063,84.21929Q445.36105,108.59925,442.87258,
                179.29963Q440.38412,250,423.38828,307.00416Z;M439.43806,316.51312Q432.44085,383.02623,370.39398,407.14258Q308.3471,431.25893,240.13979,459.78516Q171.93248,488.31139,132.30301,
                426.26451Q92.67355,364.21763,63.21484,307.10882Q33.75613,250,44.06194,178.90151Q54.36774,107.80301,118.67355,75.31613Q182.97935,42.82924,240.60882,72.66602Q298.23828,102.50279,
                368.10882,107.87054Q437.97935,113.23828,442.20731,181.61914Q446.43527,250,439.43806,316.51312Z;M402.82336,294.74662Q372.52122,339.49324,339.45366,380.77461Q306.3861,422.05598,
                251.70463,416.9165Q197.02317,411.77702,159.66506,377.28619Q122.30695,342.79537,72.75579,296.39768Q23.20463,250,37.88851,178.24662Q52.57238,106.49324,117.0304,72.97924Q181.48842,
                39.46525,238.53957,73.79537Q295.59073,108.12549,332.49083,135.50917Q369.39092,162.89286,401.2582,206.44643Q433.12549,250,402.82336,294.74662Z;M453.70516,317.0107Q433.36186,
                384.02139,362.52423,381.146Q291.6866,378.27061,242.8433,399.93801Q194,421.60541,117.08118,412.14317Q40.16237,402.68093,64.29201,326.34046Q88.42165,250,109.0107,206.32693Q129.59975,
                162.65387,148.64317,78.76495Q167.6866,-5.12397,241.8433,20.74072Q316,46.60541,350.8433,99.17023Q385.6866,151.73505,429.86753,200.86753Q474.04846,250,453.70516,317.0107Z;M428.88107,
                298.41731Q382.87896,346.83463,343.6411,381.94757Q304.40324,417.06052,249.73188,417.66327Q195.06052,418.26602,121.90324,407.33463Q48.74595,396.40324,42.90922,323.20162Q37.07249,
                250,50.04223,182.03624Q63.01197,114.07249,129.2076,98.49191Q195.40324,82.91133,251.0746,78.83673Q306.74595,74.76214,356.50598,105.64321Q406.26602,136.52427,440.5746,
                193.26214Q474.88318,250,428.88107,298.41731Z"></animate>
        </path>
        </svg>`,
    };

    /**
     * Looks up a premade SVG animation by key.
     *
     * @param key
     * @returns The SVG markup string.
     */
    public static getPremadeArtSVG(key: string): string {
        if (!SVG.artTable[key]) {
            throw new Error(`Unknown key '${key}' was not found in premade SVG art.`);
        }

        return SVG.artTable[key];
    }
}
