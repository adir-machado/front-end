import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-team-modal',
  templateUrl: './team-modal.component.html',
  styleUrls: ['./team-modal.component.css']
})
export class TeamModalComponent extends Input {
  @Input('imgPath') path = '';
  @Input('lawyerName') name = 'Dr. Adir Machado Bandeira';
  @Input('lawyerOAB') oab = 'OAB 123456';
  @Input('lawyerDesc') desc = `O Dr. Adir Machado Bandeira é um renomado professor e advogado que possui uma trajetória exemplar no campo jurídico. Completando 25 anos de advocacia em 31/05/2024, ele é um profissional admirado por sua origem humilde, inteligência aguçada e habilidades notáveis na oratória, dominando a técnica jurídica com maestria.\n\nDesde o início de sua carreira, sempre se destacou por sua ética inabalável, sobriedade e firmeza no exercício da advocacia. Seu compromisso intransigente em defender os interesses de seus clientes e sua combatividade incansável fazem dele um verdadeiro defensor da justiça.\n\nAlém disso, o Dr. Adir Machado é amplamente reconhecido por seu apurado conhecimento em Direito Público. Ao longo de sua trajetória, ele desempenhou diversos cargos públicos de relevo, onde sempre se destacou por sua vasta bagagem jurídica e pela firmeza de seus propósitos. Sua atuação na Administração Pública, seja no Poder Executivo ou no Legislativo, permitiu-lhe compreender profundamente as nuances do Direito Público e desenvolver uma expertise notável nessa área.\n\nÉ uma referência quando se trata de defesa dos direitos dos cidadãos e do Estado. Seu conhecimento jurídico abrangente e sua habilidade em aplicar a legislação de forma estratégica tornam-no um advogado altamente respeitado e confiável.\n\nAo longo de sua carreira, construiu uma reputação sólida e duradoura, tanto entre seus colegas advogados quanto entre seus clientes. Sua dedicação incansável, profissionalismo e comprometimento em fornecer um serviço jurídico de qualidade são marcas registradas de sua atuação.\n\nNeste marco de 25 anos de advocacia, o Dr. Adir Machado Bandeira celebra uma carreira repleta de sucessos e conquistas. Seu legado é marcado por sua competência, conhecimento e o compromisso inabalável de buscar a justiça para seus clientes.\n\nEm resumo, o Dr. Adir Machado Bandeira é um professor e advogado exemplar, cuja trajetória de 25 anos de advocacia é marcada por sua origem humilde, inteligência, oratória persuasiva, domínio técnico-jurídico, ética, sobriedade, firmeza e combatividade na defesa de seus clientes. Seu profundo conhecimento em Direito Público, aliado à sua atuação destacada em diversos cargos públicos, o posiciona como um verdadeiro especialista nessa área. Sua dedicação e competência são pilares de sua carreira e o fazem um profissional respeitado e admirado em seu campo de atuação.`;
  
  @Output() closeEvent = new EventEmitter();

  lawyers = [
    { name: "Dr. Adir Machado Bandeira", title: "Advogado", path: "../../../assets/images/IMG_1772.png" },
    { name: "Dra. Aridênia Moura Santos", title: "Advogada", path: "../../../assets/images/img-colab-Aridenia.jpg" },
    { name: "Dr. Fellipe Moura de Britto", title: "Advogado", path: "../../../assets/images/IMG_1835.png" },
  ];

  handleClick() {
    this.closeEvent.emit();
  }
}
