(function($) {
	$(function() {
		
		//tabs
		$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
		});
		
		//add buttonts to lists
		$('#opened li').append('<div class="sidebar__buttons"><button class="btn btn--close"></button><button class="btn btn--favorite"></button></div>');
		$('#favorites li').append('<div class="sidebar__buttons"><button class="btn btn--favorite"></button></div>');
		$('#all-types li').append('<div class="sidebar__buttons"><button class="btn btn--trash"></button><button class="btn btn--favorite"></button></div>');
		
		//toggle sidebar
		$('#sidebar-toggle-button').on('click', function() {
			$('.sidebar').toggleClass('sidebar--close');
			$('.search__button').toggleClass('search__button--min');
		});
		$('.search__button--min').on('click', function() {
			$('.sidebar').removeClass('sidebar--close');
			$('.search__button').removeClass('search__button--min');
		});

	});
})(jQuery);