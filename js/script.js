 $(document).ready(function(){
     
                /*Script de Activación*/
                $('.slick-inicio').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    dots: true,
                    infinite: true,
                    speed: 500,
                    fade: false,
                    cssEase: 'linear',
                    pauseOnHover: false,
                    arrows: true
                });
                
                /* Menú Cortina al 100% */
                $('#cerrar').hide();
                
                $('#abrir').click(function(){
                    $('aside#menu-cortina').animate({
                        right: 0
                    },300);
                    $('#abrir').hide();
                    $('#cerrar').show();
                    event.preventDefault();
                });

                $('#cerrar').click(function(){
                    $('aside#menu-cortina').animate({
                        right: '-100%'
                    },300);
                    $('#cerrar').hide();
                    $('#abrir').show();
                    event.preventDefault();
                });
            });