// tags to group all of the coloured cables together
// (i do not know if these tags already exist swags given; none)

onEvent("tags.items", event => {
    [
        "ae2:white_glass_cable",
        "ae2:orange_glass_cable",
        "ae2:magenta_glass_cable",
        "ae2:light_blue_glass_cable",
        "ae2:yellow_glass_cable",
        "ae2:lime_glass_cable",
        "ae2:pink_glass_cable",
        "ae2:gray_glass_cable",
        "ae2:light_gray_glass_cable",
        "ae2:cyan_glass_cable",
        "ae2:purple_glass_cable",
        "ae2:blue_glass_cable",
        "ae2:brown_glass_cable",
        "ae2:green_glass_cable",
        "ae2:red_glass_cable",
        "ae2:black_glass_cable",
        "ae2:fluix_glass_cable",
    ].forEach((item) => {
        event.add('ae2:glass_cable', item)
    });

    [
        "ae2:white_covered_cable",
        "ae2:orange_covered_cable",
        "ae2:magenta_covered_cable",
        "ae2:light_blue_covered_cable",
        "ae2:yellow_covered_cable",
        "ae2:lime_covered_cable",
        "ae2:pink_covered_cable",
        "ae2:gray_covered_cable",
        "ae2:light_gray_covered_cable",
        "ae2:cyan_covered_cable",
        "ae2:purple_covered_cable",
        "ae2:blue_covered_cable",
        "ae2:brown_covered_cable",
        "ae2:green_covered_cable",
        "ae2:red_covered_cable",
        "ae2:black_covered_cable",
        "ae2:fluix_covered_cable",
    ].forEach((item) => {
        event.add('ae2:covered_cable', item)
    });

    [
        "ae2:white_covered_dense_cable",
        "ae2:orange_covered_dense_cable",
        "ae2:magenta_covered_dense_cable",
        "ae2:light_blue_covered_dense_cable",
        "ae2:yellow_covered_dense_cable",
        "ae2:lime_covered_dense_cable",
        "ae2:pink_covered_dense_cable",
        "ae2:gray_covered_dense_cable",
        "ae2:light_gray_covered_dense_cable",
        "ae2:cyan_covered_dense_cable",
        "ae2:purple_covered_dense_cable",
        "ae2:blue_covered_dense_cable",
        "ae2:brown_covered_dense_cable",
        "ae2:green_covered_dense_cable",
        "ae2:red_covered_dense_cable",
        "ae2:black_covered_dense_cable",
        "ae2:fluix_covered_dense_cable",
    ].forEach((item) => {
        event.add('ae2:dense_cable', item)
    });

    [
        "ae2:white_smart_cable",
        "ae2:orange_smart_cable",
        "ae2:magenta_smart_cable",
        "ae2:light_blue_smart_cable",
        "ae2:yellow_smart_cable",
        "ae2:lime_smart_cable",
        "ae2:pink_smart_cable",
        "ae2:gray_smart_cable",
        "ae2:light_gray_smart_cable",
        "ae2:cyan_smart_cable",
        "ae2:purple_smart_cable",
        "ae2:blue_smart_cable",
        "ae2:brown_smart_cable",
        "ae2:green_smart_cable",
        "ae2:red_smart_cable",
        "ae2:black_smart_cable",
        "ae2:fluix_smart_cable",
    ].forEach((item) => {
        event.add('ae2:smart_cable', item)
    });

    [
        "ae2:white_smart_dense_cable",
        "ae2:orange_smart_dense_cable",
        "ae2:magenta_smart_dense_cable",
        "ae2:light_blue_smart_dense_cable",
        "ae2:yellow_smart_dense_cable",
        "ae2:lime_smart_dense_cable",
        "ae2:pink_smart_dense_cable",
        "ae2:gray_smart_dense_cable",
        "ae2:light_gray_smart_dense_cable",
        "ae2:cyan_smart_dense_cable",
        "ae2:purple_smart_dense_cable",
        "ae2:blue_smart_dense_cable",
        "ae2:brown_smart_dense_cable",
        "ae2:green_smart_dense_cable",
        "ae2:red_smart_dense_cable",
        "ae2:black_smart_dense_cable",
        "ae2:fluix_smart_dense_cable",
    ].forEach((item) => {
        event.add('ae2:smart_dense_cable', item)
    });
});