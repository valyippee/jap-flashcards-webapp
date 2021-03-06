package com.harukoma;

import com.harukoma.domain.Card;
import com.harukoma.repositories.CardRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class BootStrap implements CommandLineRunner {

    private final CardRepository cardRepository;

    public BootStrap(CardRepository cardRepository) {
        this.cardRepository = cardRepository;
    }

    @Override
    public void run(String... args) throws Exception {

        Card cat = new Card((long) 1, "cat", "猫", "ねこ");
        Card panda = new Card((long) 2, "panda", "パンダ", "");
        Card fish = new Card((long) 3, "fish", "魚", "さかな");

        cardRepository.save(cat);
        cardRepository.save(panda);
        cardRepository.save(fish);
    }





}
