package com.harukoma;

import com.harukoma.domain.Card;
import com.harukoma.domain.Set;
import com.harukoma.repositories.CardRepository;
import com.harukoma.repositories.SetRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class BootStrap implements CommandLineRunner {

    private final CardRepository cardRepository;
    private final SetRepository setRepository;

    public BootStrap(CardRepository cardRepository, SetRepository setRepository) {
        this.cardRepository = cardRepository;
        this.setRepository = setRepository;
    }

    @Override
    public void run(String... args) throws Exception {

        Card cat = new Card((long) 1, "cat", "猫", "ねこ");
        Card panda = new Card((long) 2, "panda", "パンダ", "");
        Card fish = new Card((long) 3, "fish", "魚", "さかな");

        cardRepository.save(cat);
        cardRepository.save(panda);
        cardRepository.save(fish);

        Set animals = new Set((long) 1, "animals", "a set of animals");
        animals.addCard(cat);
        animals.addCard(panda);
        animals.addCard(fish);

        setRepository.save(animals);

    }





}
