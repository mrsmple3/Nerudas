(function ($) {
	$(document).ready(function () {
		$(".filter__dropdown__title").click(function (event) {
			$(".filter__dropdown").toggleClass("active");
		});

		$(".filter__title").click(function (event) {
			$(".filter__title").removeClass("active");
			$(this).addClass("active");
		});

		$(".nav__item").each(function () {
			const $title = $(this);

			$title.click(function (event) {
				event.preventDefault();
				const target = $(this).data("sub");

				// Проверяем, есть ли класс active у текущего элемента
				const isActive = $title.hasClass("active");

				// Удаляем класс active у всех элементов
				$(".nav__item").removeClass("active");
				$(".submenu").removeClass("active");

				// Если элемент был неактивен, активируем его
				if (!isActive) {
					$title.addClass("active");
					$(".submenu").each(function () {
						if ($(this).data("sub") === target) {
							$(this).addClass("active");
						}
					});
				}
			});
		});
	});
})(jQuery);
