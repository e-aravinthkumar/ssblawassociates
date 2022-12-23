import Alpine from "alpinejs";
import intersect from "@alpinejs/intersect";
import collapse from "@alpinejs/collapse";

window.Alpine = Alpine;
Alpine.plugin(collapse);
Alpine.plugin(intersect);
Alpine.start();
