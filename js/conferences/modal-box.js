(function ($) {
    var ModalBox, linkHandler, closeHandler, scrollHandler;

    ModalBox = function (el) {
        this.el = $(el);
    }

    ModalBox.prototype.center = function () {
        var $el = this.el,
            $modalBox = $el.find('.modal-box'),
            parentHeight = $el.height(),
            childHeight = $modalBox.outerHeight(),
            offsetTop;

        if ( !$modalBox.is('.top') && !$modalBox.is('.bottom') ) {
            offsetTop = (parentHeight - childHeight) / 2;
            $modalBox.css('top', offsetTop);
        }

        if ( $modalBox.is('.bottom') ) {
            offsetTop = (parentHeight - childHeight);
            $modalBox.css('top', offsetTop);
        }
    };

    ModalBox.prototype.show = function () {
        var $el = this.el,
            id = $el.data('modal'),
            animation = $el.find('.modal-box').data('animation'),
            $iframe = $el.find('iframe');

        if ( $('[data-modal].open').length ) $('[data-modal].open').modalBox('hide');

        if ( $iframe.length ) $iframe.attr('src', $iframe.data('iframeSrc'));

        $el.addClass('open');

        if ( animation == 'none' ) {
            $el.show();

        }else {
            $el.fadeIn(250);

        }

        this.center();
    };

    ModalBox.prototype.hide = function() {
        var $el = this.el,
            animation = $el.find('.modal-box').data('animation'),
            $iframe = $el.find('iframe');

        $el.removeClass('open');

        if ( animation && animation == 'none' ) {
            $el.hide();

            if ( $iframe.length ) $iframe.attr('src', '');

        }else {
            $el.fadeOut(250);

            setTimeout(function () {
                if ( $iframe.length ) $iframe.attr('src', '');
            }, 250);

        }
    };

    $.fn.modalBox = function (option) {
        return this.each(function () {
            var $this = $(this),
                data = $this.data('modalBox');

            if ( !data ) {
                data = new ModalBox(this);
                $this.data('modalBox', data);
            }

            if (typeof option == 'string') {
                data[option]();
            }
        });
    };

    linkHandler = function (event) {
        event.preventDefault();

        var modalId = $(this).data('modalLink'),
            $modalBox = $('[data-modal=' + modalId + ']');

        $modalBox.modalBox('show');
    };

    clickHandler = function (event) {
        var $target = $(event.target);

        if ( !$target.closest('.modal-box').length ) {
            $(this).modalBox('hide');
        }
    };

    closeHandler = function () {
        $(this).closest('[data-modal]').modalBox('hide');
    };

    resizeHandler = function () {
        if ( $('[data-modal].open').length ) $('[data-modal].open').modalBox('center');
    };

    scrollHandler = function (event) {
        event.preventDefault();

        var e0 = event.originalEvent,
            delta = e0.wheelDelta || -e0.detail,
            $modalBox = $(event.target).closest('.modal-box');

        if ( $modalBox.length ) {
            $modalBox.get(0).scrollTop -= delta;
        }
    };

    $('.modal-window').each(function () {
        var $modal = $(this),
            $modalBox = $modal.find('.modal-box'),
            id = $(this).data('modal'),
            time = $modal.data('timeout'),
            scroll = $modal.data('scroll');

        if ( $modal.find('iframe').length ) {
            var iframe = $modal.find('iframe'),
                src = iframe.attr('src');

            $modalBox.addClass('iframe-box');
            iframe.attr('src', '');
            iframe.data('iframeSrc', src);
        }

        if ( time ) {
            setTimeout(function () {
                $modal.modalBox('show');
            }, time);
        }

        if ( scroll ) {
            $(window).on('scroll.modalBox' + id, function () {
                if ( $(this).scrollTop() >= scroll ) {
                    $modal.modalBox('show');

                    $(window).off('.modalBox' + id);
                }
            });
        }
    });

    $(document)
        .on('click.modalBox', '[data-modal-link]', linkHandler)
        .on('mousedown.modalBox', '[data-modal]', clickHandler)
        .on('click.modalBox', '[data-modal] .close-btn', closeHandler)
        .on('mousewheel.modalBox DOMMouseScroll.modalBox', '[data-modal]', scrollHandler);

    $(window).on('resize.modalBox', resizeHandler);


})(jQuery);
