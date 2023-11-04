$(document).ready(function () {
    var container = $(".qty-container");
    var inputQty = container.find(".input-qty");

    container.on("click", ".qty-btn-plus", function () {
        var $n = inputQty.val();
        $n = Number($n);
        $n = $n + 1;
        inputQty.val($n);
    });

    container.on("click", ".qty-btn-minus", function () {
        var $n = inputQty.val();
        $n = Number($n);
        if ($n > 1) {
            $n = $n - 1;
            inputQty.val($n);
        }
    });

    // Ensure the input value is always a valid number and not empty
    inputQty.on("input", function () {
        var $n = inputQty.val();
        if (!/^\d+$/.test($n) || $n < 1) {
            $n = 1;
        }
        inputQty.val($n);
    });
});
