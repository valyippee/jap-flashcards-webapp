package com.harukoma.domain;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Card {
    @Id
    private Long id;

    private String english;
    private String japanese;
    private String furigana;

    public Card(Long id, String english, String japanese, String furigana) {
        this.id = id;
        this.english = english;
        this.japanese = japanese;
        this.furigana = furigana;
    }

    public Card() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEnglish() {
        return english;
    }

    public void setEnglish(String english) {
        this.english = english;
    }

    public String getJapanese() {
        return japanese;
    }

    public void setJapanese(String japanese) {
        this.japanese = japanese;
    }

    public String getFurigana() {
        return furigana;
    }

    public void setFurigana(String furigana) {
        this.furigana = furigana;
    }
}
