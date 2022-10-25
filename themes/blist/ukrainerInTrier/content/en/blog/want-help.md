---
author: 'Hugo Authors'
title: 'I can help'
date: 2021-07-15
description: 'Guide to emoji usage in Hugo'
tags: ['help']
# thumbnail: https://picsum.photos/id/1050/400/250
---

<br>
<div class="form-help">
  <form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="name" id="fname" name="fname" placeholder="Name"><br>
  <label for="email">Email address:</label><br>
  <input type="email" id="email" name="email" placeholder="example@email.com"><br>
  <label for="text">How can you help?</label><br>
  <textarea type="text" id="text" name="text" placeholder="I can ..." rows="5" cols="28" class="textarea__help"></textarea><br><br>
  <input class='submit__help' type="submit" value="Submit">
</form>
</div>

<!--more-->

---

{{< css.inline >}}

<style>
.emojify {
	font-family: Apple Color Emoji, Segoe UI Emoji, NotoColorEmoji, Segoe UI Symbol, Android Emoji, EmojiSymbols;
	font-size: 2rem;
	vertical-align: middle;
}

@media screen and (max-width:650px) {
  .nowrap {
    display: block;
    margin: 25px 0;
  }
}
</style>

{{< /css.inline >}}
