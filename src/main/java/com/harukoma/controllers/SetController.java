package com.harukoma.controllers;


import com.harukoma.domain.Card;
import com.harukoma.repositories.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/set")
@CrossOrigin("*")
public class SetController {

    @Autowired
    private CardRepository cardRepository;

    @GetMapping
    List<Card> displaySet() {
        List<Card> newList = new ArrayList<Card>();

        cardRepository.findAll().forEach((card) -> newList.add(card));
        return newList;
    }
}
