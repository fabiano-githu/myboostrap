
    /* ===================================================================
         CORREÇÃO: ajusta dinamicamente o espaço acima do conteúdo (padding-top)
         de acordo com a altura REAL do wrapper #fixedTop (header + nav).
         Isso resolve o problema em qualquer tamanho de tela, pois o header
         muda de altura (flex-row -> flex-column) conforme o breakpoint,
         e antes esse valor estava "fixo" (mt-5) e não acompanhava essa mudança.
    =================================================================== -->*/


   
        function ajustarEspacoTopo() {
            var fixedTop = document.getElementById('fixedTop');
            var main = document.getElementById('mainContent');
            if (fixedTop && main) {
                main.style.paddingTop = fixedTop.offsetHeight + 'px';
            }
        }

        window.addEventListener('load', ajustarEspacoTopo);
        window.addEventListener('resize', ajustarEspacoTopo);
        // Reaplica após imagens carregarem (logo pode mudar a altura do header)
        window.addEventListener('DOMContentLoaded', ajustarEspacoTopo);
   
