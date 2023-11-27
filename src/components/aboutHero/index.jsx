'use client'

import styles from './styles.module.scss';

export default function AboutHero() {
    const portuguese = JSON.parse(localStorage.getItem('portuguese'))

    return(
        <section className={styles.section}>
            <h1 className={styles.h1}>{portuguese === true ? "Sobre Amadou Jallow" : "About Amadou Jallow"}</h1>
            <img src="https://4fund.com/uploads/chipin/6xkxxv/cover/orginal/ac892cf42dcb49efeaaefb2067ec914a.jpg" alt="Amadou" className='' />
            <p>
                {portuguese === true ? "Amadou Jallow foi um jovem africano residente na Gâmbia que passava por necessidades financeiras. Amadou perdeu os seus pais ainda jovem, e desde então teve de assumir o cargo de ser o chefe da família, cuidando de seus irmãos mais novos e de sua avó." : 
                "Amadou Jallow was a young African resident in Gambia who was going through financial difficulties. Amadou lost his parents at a young age, and since then he had to take on the role of being the head of the family, taking care of his younger siblings and his grandmother."}
            </p>
            <p>
                {portuguese === true ? "Amadou costumava trabalhar colhendo madeira, porém as novas leis ecológicas do país o colocaram numa situação financeira pior, e desde então ele e sua família passaram a viver em condições precárias.": 
                "Amadou used to work harvesting wood, but the country's new ecological laws put him in a worse financial situation, and since then he and his family have been living in precarious conditions."}
            </p>
            <p>
                {portuguese === true ? "A Gâmbia, além da pobreza, passa por problemas sanitários, uma vez que a malária é uma doença comum na região. Amadou e sua família cultivavam comida, mas ainda assim passavam por dificuldades financeiras, e o que costumavam comer era arroz, batatas e tomates, alimentos que sozinhos não são suficientes para uma boa alimentação." : 
                "Gambia, in addition to poverty, is experiencing health problems, since malaria is a common disease in the region. Amadou and his family grew food, but still went through financial difficulties, and what they used to eat was rice, potatoes and tomatoes, foods that alone are not enough for a good diet."}
            </p>
            <p>
                {portuguese === true ? "Não bastando isso, tempos depois dos ocorridos, Amadou teve a notícia de que um parente seu havia falecido, e desde então, teve que cuidar de mais duas crianças órfãs, que começaram a integrar sua família." : 
                "Not only that, some time after the events, Amadou heard the news that a relative of his had died, and since then, he had to take care of two more orphaned children, who began to integrate his family."}
            </p>
            <img src="https://4fund.com/uploads/chipin/6xkxxv/cover/orginal/cc2e7a031cff3fdf29085e0d2a2360b0.jpg" alt="" />
            <p>
                {portuguese === true ? "Amadou, vendo as dificuldades, utilizou o celular que possuía para solicitar doações pela internet para pessoas de outros países, e assim, conseguir ajudar sua família, pois a moeda local não é muito valorizada, e Amadou passou um tempo sem conseguir trabalho." : 
                "Amadou, seeing the difficulties, used the cell phone he had to request donations over the internet to people from other countries, and thus, to be able to help his family, because the local currency is not very valued, and Amadou spent some time without getting work."}
            </p>
            <p>
                {portuguese === true ? "Algumas pessoas se compadeceram de Amadou e decidiram ajudá-lo doando dinheiro para ajudá-lo, e duas vaquinhas foram criadas para ajudar Amadou, uma delas foi criada por um brasileiro, e a outra por um europeu. Juntas, elas arrecadavam dinheiro para Amadou, e enviavam para ele quando podiam." : 
                "Some people took pity on Amadou and decided to help him by donating money to help him, and two cows were created to help Amadou, one of them was created by a Brazilian, and the other by a European. Together, they raised money for Amadou, and sent it to him when they could."}
            </p>
            <p>
                {portuguese === true ? "Amadou tentava ajudar sua família com o que tinha, mas quis tentar ajudar mais, e em outubro de 2023, Amadou decidiu pegar um barco para a Espanha, com o objetivo de conseguir cuidar da sua família indo para lá. Porém, o barco de Amadou desapareceu, e desde então, ele nunca mais foi visto." :
                "Amadou tried to help his family with what he had, but he wanted to try to help more, and in October 2023, Amadou decided to take a boat to Spain, in order to be able to take care of his family by going there. However, Amadou's boat disappeared, and since then, he has never been seen again."}
            </p>
            <p>
                {portuguese === true ? "Este site foi criado para tentar divulgar a causa de Amadou e ajudar ele a alimentar sua família, porém ele infelizmente não está mais entre nós. O site ainda está no ar para que possamos lembrar de Amadou e de sua história, e para que outras pessoas possam ser ajudadas através deste domínio." :
                "This site was created to try to publicize Amadou's cause and help him feed his family, but unfortunately he is no longer with us. The site is still online so that we can remember Amadou and his story, and so that other people can be helped through this domain."}
            </p>
            <p>
                {portuguese === true ? "Pedimos que vejam algumas das pessoas em necessidade que deixaremos na aba 'Ajudar'. Caso consigamos um meio de ajudar a família de Amadou, informaremos em outra atualização futura." : 
                "We ask that you see some of the people in need that we will leave in the 'Help' tab. If we can find a way to help Amadou's family, we will inform you in another future update."}
            </p>
            <p>
                {portuguese === true ? "Obrigado por ler a história de Amadou." : "Thank you for reading Amadou's story."}
            </p>
        </section>
    )
}

//Translate this to english: "Amadou Jallow foi um jovem africano residente na Gâmbia que passava por necessidades financeiras. Amadou perdeu os seus pais ainda jovem, e desde então teve de assumir o cargo de ser o chefe da família, cuidando de seus irmãos mais novos e de sua avó.
//Amadou Jallow was a young African resident in Gambia who was going through financial difficulties. Amadou lost his parents at a young age, and since then he had to take on the role of being the head of the family, taking care of his younger siblings and his grandmother."