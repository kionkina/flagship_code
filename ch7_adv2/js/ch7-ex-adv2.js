//acquired local_dict by making API calls to the skishore graphics.txt file
//view API call info in stroke_api_calls.js
//https://raw.githubusercontent.com/skishore/makemeahanzi/master/graphics.txt

var strokes = {"務":["M 366 601 Q 462 697 490 709 Q 506 715 501 729 Q 498 742 440 773 Q 424 782 404 774 Q 352 755 271 734 Q 249 728 199 731 Q 180 732 186 714 Q 192 704 209 693 Q 234 677 264 694 Q 388 742 406 731 Q 416 722 411 710 Q 383 665 353 611 C 338 585 345 580 366 601 Z","M 353 611 Q 323 623 294 633 Q 281 637 276 635 Q 272 631 272 621 Q 275 611 296 594 Q 320 572 344 545 Q 354 535 368 534 Q 377 534 381 545 Q 385 557 380 581 Q 377 591 366 601 L 353 611 Z","M 316 465 Q 350 474 385 481 Q 415 488 418 475 Q 418 460 392 407 Q 385 392 391 389 Q 398 385 409 397 Q 479 451 507 461 Q 529 467 527 480 Q 526 492 456 524 Q 437 533 351 506 Q 207 467 87 444 Q 62 440 82 420 Q 98 402 141 417 Q 214 439 286 456 L 316 465 Z","M 314 387 Q 338 272 316 170 Q 309 119 294 109 Q 291 109 228 116 Q 218 120 212 117 Q 208 116 222 103 Q 259 58 280 22 Q 296 3 314 11 Q 336 21 355 73 Q 380 152 374 286 Q 373 380 351 421 Q 338 449 316 465 C 283 494 294 489 314 387 Z","M 286 456 Q 235 300 58 131 Q 48 118 56 117 Q 78 111 151 170 Q 226 228 314 387 C 329 413 296 484 286 456 Z","M 612 690 Q 630 720 649 755 Q 661 783 674 797 Q 681 807 675 819 Q 671 829 643 847 Q 618 860 602 858 Q 586 854 595 836 Q 625 787 507 588 Q 500 578 498 572 Q 497 562 508 566 Q 520 569 554 608 L 566 624 Q 576 637 588 654 Q 592 663 600 671 L 612 690 Z","M 739 672 Q 788 685 843 696 Q 879 705 884 710 Q 891 717 887 725 Q 880 735 853 742 Q 829 746 739 715 Q 670 699 612 690 C 582 685 574 684 600 671 Q 616 662 637 657 Q 640 657 710 666 L 739 672 Z","M 715 529 Q 731 553 749 582 Q 761 601 775 618 Q 784 625 779 636 Q 767 663 739 672 C 711 684 711 684 710 666 Q 710 621 675 558 L 655 529 Q 651 525 648 520 Q 599 460 490 392 Q 483 386 488 383 Q 494 379 504 382 Q 615 410 677 483 Q 681 489 688 495 L 715 529 Z","M 688 495 Q 784 399 839 398 Q 903 402 958 416 Q 989 423 985 431 Q 984 437 903 454 Q 789 484 718 527 Q 715 528 715 529 L 675 558 Q 653 576 628 596 Q 594 626 566 624 C 536 626 528 623 554 608 Q 555 607 560 604 Q 584 594 655 529 L 688 495 Z","M 654 277 Q 697 290 740 296 Q 759 299 764 293 Q 774 277 766 235 Q 750 117 721 67 Q 705 39 678 43 Q 656 50 635 60 Q 611 70 627 44 Q 666 -2 682 -36 Q 703 -58 722 -40 Q 753 -18 777 22 Q 804 68 824 215 Q 831 267 849 292 Q 862 305 855 316 Q 846 326 795 349 Q 774 356 755 344 Q 736 331 666 313 L 606 297 Q 542 282 485 276 Q 469 275 466 266 Q 465 259 488 248 Q 512 233 531 241 Q 564 251 596 261 L 654 277 Z","M 596 261 Q 551 144 424 19 Q 418 15 414 9 Q 407 2 414 -1 Q 445 -7 534 77 Q 606 140 654 277 L 666 313 Q 673 337 685 358 Q 692 368 685 377 Q 678 386 649 400 Q 627 410 618 407 Q 606 403 609 388 Q 616 345 606 297 L 596 261 Z"],"廣":["M 515 828 Q 543 809 574 785 Q 589 775 603 777 Q 613 778 617 792 Q 620 807 608 834 Q 595 861 504 873 Q 489 874 484 871 Q 480 867 482 855 Q 486 845 515 828 Z","M 643 715 Q 775 745 777 745 Q 786 752 782 760 Q 776 773 748 781 Q 721 788 616 759 Q 447 725 327 719 Q 323 719 319 717 C 289 712 301 700 329 690 Q 368 674 409 681 Q 508 696 609 710 L 643 715 Z","M 319 717 Q 303 732 278 744 Q 259 756 245 751 Q 232 744 239 729 Q 260 699 253 616 Q 252 607 251 596 Q 236 415 182 273 Q 137 164 44 28 Q 38 21 36 15 Q 33 3 44 5 Q 78 11 166 137 Q 184 167 203 201 Q 281 361 306 566 Q 315 648 329 690 C 333 706 333 706 319 717 Z","M 654 591 Q 705 598 748 604 Q 758 603 765 613 Q 766 623 747 632 Q 720 651 664 633 L 615 621 Q 599 620 583 614 Q 534 604 490 596 L 448 590 Q 408 587 364 581 Q 339 577 358 563 Q 386 544 425 549 Q 438 552 456 555 L 492 563 Q 547 575 611 584 L 654 591 Z","M 490 596 Q 489 624 490 637 Q 494 652 484 659 Q 471 666 450 674 Q 434 678 419 668 Q 412 661 423 652 Q 438 637 448 590 L 456 555 Q 471 462 479 448 Q 485 441 491 446 Q 495 453 496 468 L 496 498 Q 495 508 495 516 Q 494 541 492 563 L 490 596 Z","M 636 519 Q 643 556 654 591 C 663 620 656 616 664 633 Q 664 634 665 634 Q 678 668 682 675 Q 686 682 673 696 Q 657 709 643 715 C 616 728 599 736 609 710 Q 621 685 615 621 L 611 584 Q 607 554 601 521 C 596 491 630 490 636 519 Z","M 496 468 Q 508 468 520 469 Q 562 476 653 484 Q 663 485 664 493 Q 664 500 636 519 C 633 521 631 521 601 521 Q 597 522 592 520 Q 540 507 496 498 C 467 492 466 468 496 468 Z","M 551 401 Q 575 413 774 420 Q 903 420 910 429 Q 910 430 911 430 Q 917 440 900 454 Q 849 491 813 483 Q 669 450 308 402 Q 287 399 303 383 Q 316 370 334 365 Q 355 361 370 364 Q 437 385 514 396 L 551 401 Z","M 370 315 Q 355 322 339 324 Q 332 325 328 320 Q 322 314 332 305 Q 359 275 376 193 Q 382 141 420 115 Q 421 115 423 114 Q 433 113 437 124 L 437 149 Q 433 174 422 202 Q 413 247 408 282 Q 408 285 407 287 C 405 300 398 303 370 315 Z","M 658 147 Q 673 122 688 113 Q 698 106 714 126 Q 727 144 757 246 Q 766 276 789 300 Q 802 312 792 326 Q 777 342 736 369 Q 717 379 650 362 Q 620 359 575 350 L 525 341 Q 503 340 481 335 Q 420 323 370 315 C 340 310 378 280 407 287 Q 455 300 526 312 L 573 320 Q 678 338 698 324 Q 708 315 706 300 Q 684 186 666 174 C 653 155 653 155 658 147 Z","M 568 232 Q 598 239 624 242 Q 645 246 637 257 Q 627 270 605 273 Q 590 274 570 269 L 526 257 Q 489 247 458 235 Q 443 232 462 219 Q 465 216 526 225 L 568 232 Z","M 575 350 Q 576 354 576 356 Q 583 372 575 380 Q 562 393 551 401 C 527 419 505 425 514 396 Q 523 369 525 341 L 526 312 Q 526 291 526 257 L 526 225 Q 526 198 526 164 C 526 134 564 141 565 171 Q 566 202 568 232 L 570 269 Q 571 296 573 320 L 575 350 Z","M 437 124 Q 444 123 454 124 Q 569 140 658 147 C 688 149 692 160 666 174 Q 660 178 652 180 Q 633 184 565 171 L 526 164 Q 480 157 437 149 C 407 144 407 126 437 124 Z","M 412 88 Q 394 31 266 -60 Q 244 -73 271 -72 Q 331 -76 441 12 Q 469 34 482 45 Q 494 55 492 66 Q 491 79 465 90 Q 437 103 424 102 Q 417 101 412 88 Z","M 653 71 Q 699 25 755 -43 Q 771 -65 788 -70 Q 797 -71 805 -61 Q 818 -48 807 -1 Q 803 24 785 42 Q 767 55 727 74 Q 681 95 655 104 Q 645 110 643 97 Q 642 82 653 71 Z"],"殺":["M 355 673 Q 388 728 410 747 Q 419 756 415 768 Q 411 780 387 800 Q 365 816 348 817 Q 332 816 338 796 Q 348 774 338 753 Q 323 720 306 688 L 284 651 Q 245 591 171 503 Q 161 494 159 489 Q 156 479 169 481 Q 208 487 324 631 L 355 673 Z","M 324 631 Q 417 580 422 580 Q 429 581 432 590 Q 438 603 419 632 Q 404 659 355 673 L 306 688 L 305 689 Q 235 708 197 714 Q 190 715 191 707 Q 192 697 203 691 Q 242 675 284 651 L 324 631 Z","M 343 372 Q 397 385 462 396 Q 478 399 478 406 Q 479 418 462 426 Q 432 438 342 412 L 296 400 Q 164 370 95 361 Q 83 360 81 352 Q 78 342 93 331 Q 132 307 169 320 Q 242 348 297 361 L 343 372 Z","M 297 361 Q 303 133 284 118 Q 278 115 217 126 Q 207 129 207 123 Q 207 116 217 109 Q 272 52 289 21 Q 302 5 316 18 Q 346 48 348 125 Q 345 179 343 372 L 342 412 Q 343 445 352 468 Q 359 484 345 496 Q 321 515 295 524 Q 277 530 271 523 Q 265 517 275 503 Q 296 469 295 430 Q 295 415 296 400 L 297 361 Z","M 166 267 Q 147 212 117 161 Q 102 128 118 103 Q 125 87 143 99 Q 186 136 191 217 Q 194 247 187 268 Q 183 275 177 276 Q 170 275 166 267 Z","M 404 246 Q 422 224 440 195 Q 450 182 465 179 Q 474 178 481 189 Q 488 202 485 230 Q 484 246 460 264 Q 397 297 388 295 Q 384 292 382 280 Q 383 270 404 246 Z","M 572 729 Q 542 742 532 739 Q 517 735 530 718 Q 551 694 545 590 Q 542 575 537 556 Q 510 516 483 473 Q 482 467 492 469 Q 516 469 549 506 Q 588 548 593 676 Q 594 686 595 694 C 598 718 598 718 572 729 Z","M 595 694 Q 599 695 605 698 Q 693 728 698 726 Q 707 723 706 708 Q 697 575 706 547 Q 713 525 735 513 Q 766 500 824 506 Q 879 513 906 532 Q 921 539 909 554 Q 893 570 872 578 Q 859 582 838 569 Q 772 530 753 562 Q 740 583 749 643 Q 753 680 786 718 Q 804 734 786 748 Q 762 767 735 778 Q 725 784 708 774 Q 651 747 572 729 C 543 722 567 683 595 694 Z","M 696 203 Q 726 258 748 337 Q 755 371 774 390 Q 790 405 771 419 Q 750 435 717 447 Q 695 454 674 443 Q 634 419 577 407 Q 552 404 540 397 Q 533 391 550 382 Q 575 369 614 382 Q 641 389 668 398 Q 689 405 689 381 Q 689 315 654 238 L 633 199 Q 620 180 604 160 Q 553 108 424 66 Q 409 62 419 54 Q 426 48 455 54 Q 540 64 591 91 Q 634 115 668 160 L 696 203 Z","M 668 160 Q 729 93 783 38 Q 801 19 828 22 Q 970 37 981 54 Q 985 61 974 64 Q 814 110 723 181 Q 710 191 696 203 L 654 238 Q 612 278 562 328 Q 549 344 532 345 Q 507 344 500 335 Q 497 329 506 325 Q 543 307 568 275 Q 601 236 633 199 L 668 160 Z"],"術":["M 271 775 Q 272 679 173 589 Q 170 588 130 548 Q 120 533 136 537 Q 188 541 275 637 Q 320 698 347 729 Q 359 741 345 756 Q 308 793 281 791 Q 269 790 271 775 Z","M 230 377 Q 255 408 283 444 Q 308 481 328 499 Q 338 508 334 521 Q 331 533 307 556 Q 283 575 265 576 Q 247 576 254 555 Q 272 507 167 369 Q 118 305 52 236 Q 42 227 40 222 Q 36 212 49 213 Q 85 219 206 349 L 230 377 Z","M 206 349 Q 242 262 201 100 Q 189 60 221 17 Q 222 16 224 14 Q 240 1 250 24 Q 263 58 262 99 Q 263 268 269 305 Q 276 329 267 338 Q 251 356 240 368 Q 236 374 230 377 C 207 396 195 377 206 349 Z","M 501 510 Q 595 544 598 546 Q 605 555 600 562 Q 593 572 565 575 Q 555 575 502 558 L 460 540 Q 456 540 455 539 Q 422 527 384 519 Q 351 509 377 497 Q 413 485 459 495 L 501 510 Z","M 459 495 Q 452 284 449 257 Q 443 220 433 181 Q 424 142 446 88 Q 452 72 460 69 Q 464 63 472 70 Q 479 74 489 94 Q 498 116 497 145 Q 496 185 501 510 L 502 558 Q 502 675 519 739 Q 532 761 506 781 Q 491 791 468 805 Q 447 821 428 807 Q 424 803 429 788 Q 457 746 458 686 Q 458 614 460 540 L 459 495 Z","M 347 404 Q 371 371 347 245 Q 346 242 345 238 Q 335 204 305 144 Q 301 140 300 135 Q 299 126 306 128 Q 327 134 368 200 Q 368 203 370 204 Q 395 264 408 358 Q 412 388 411 392 Q 399 405 375 415 Q 362 422 351 419 Q 342 415 347 404 Z","M 616 397 Q 620 410 612 418 Q 600 425 574 431 Q 552 435 547 428 Q 540 422 550 410 Q 568 391 565 262 Q 564 210 588 194 Q 598 184 651 188 Q 679 191 688 205 Q 695 215 690 220 Q 684 226 629 226 Q 572 232 616 397 Z","M 554 655 Q 603 606 626 607 Q 639 607 643 626 Q 643 639 631 657 Q 610 681 556 681 Q 546 682 547 671 Q 546 662 554 655 Z","M 694 680 Q 654 667 685 652 Q 737 633 796 655 L 874 679 Q 893 685 895 688 Q 904 698 897 707 Q 887 720 854 723 Q 830 724 749 693 Q 722 686 694 680 Z","M 773 486 Q 851 502 948 503 Q 966 504 970 513 Q 974 523 958 535 Q 901 571 849 548 Q 809 539 751 523 Q 681 507 598 489 Q 579 485 594 471 Q 624 449 657 458 Q 690 470 728 477 L 773 486 Z","M 728 477 Q 729 473 735 465 Q 747 441 747 401 Q 751 310 753 102 Q 752 75 743 66 Q 733 60 711 67 Q 692 74 669 83 Q 657 87 657 81 Q 656 72 665 62 Q 717 4 749 -39 Q 761 -49 775 -33 Q 812 18 814 110 Q 802 303 808 423 Q 814 451 808 460 Q 799 472 773 486 C 747 501 714 503 728 477 Z"],"醫":["M 295 776 Q 319 772 385 787 Q 512 820 516 823 Q 522 829 519 835 Q 513 844 491 849 Q 469 852 446 842 Q 412 829 375 818 Q 333 808 285 800 Q 282 800 283 799 C 254 791 265 779 295 776 Z","M 382 709 L 384 711 Q 396 735 396 739 Q 395 745 379 756 Q 364 763 355 763 Q 345 762 351 751 Q 357 739 340 695 Q 331 676 318 652 Q 314 646 312 643 Q 311 637 318 639 Q 336 645 373 696 L 382 709 Z","M 433 691 Q 472 704 513 718 Q 517 724 515 729 Q 509 736 490 738 Q 478 738 421 718 Q 403 714 382 709 C 362 704 362 704 373 696 Q 373 695 377 693 Q 386 690 405 688 L 433 691 Z","M 437 607 Q 449 611 462 613 Q 522 622 527 631 Q 527 638 512 644 Q 491 657 445 640 L 409 629 Q 400 629 318 611 Q 299 608 314 597 Q 335 584 373 593 Q 385 597 402 599 L 437 607 Z","M 402 599 Q 386 559 328 511 Q 321 507 327 505 Q 349 502 390 533 Q 424 564 437 607 L 445 640 Q 445 641 446 642 Q 447 655 454 665 Q 458 675 450 680 Q 441 687 433 691 C 407 706 399 710 405 688 Q 412 667 409 629 L 402 599 Z","M 479 556 Q 497 546 516 531 Q 525 525 534 527 Q 540 528 542 536 Q 543 546 535 562 Q 531 572 511 578 Q 475 587 459 582 Q 458 579 459 572 Q 462 566 479 556 Z","M 283 799 Q 274 806 258 813 Q 242 822 236 816 Q 230 810 236 799 Q 267 742 245 513 Q 244 485 227 458 Q 220 446 227 431 Q 233 415 241 409 Q 248 405 261 413 Q 321 455 497 461 Q 513 461 514 469 Q 513 479 494 491 Q 484 500 385 482 Q 358 482 299 468 Q 292 467 289 469 Q 285 470 285 479 Q 289 588 291 727 Q 291 754 295 776 C 297 791 297 791 283 799 Z","M 580 813 Q 579 813 580 809 Q 593 742 559 657 Q 556 653 555 649 Q 554 642 560 644 Q 582 651 603 694 Q 625 757 626 792 C 627 814 627 814 617 821 Q 610 827 597 831 Q 585 838 577 834 Q 570 830 575 821 L 580 813 Z","M 626 792 Q 627 793 632 795 Q 656 804 676 811 Q 688 818 693 816 Q 699 815 699 804 Q 684 723 687 712 Q 693 696 709 685 Q 733 673 778 677 Q 823 681 844 695 Q 854 699 847 711 Q 834 724 819 731 Q 809 734 792 725 Q 741 692 724 719 Q 720 732 732 765 Q 738 786 761 804 Q 776 814 763 827 Q 745 843 726 853 Q 717 857 704 851 Q 698 850 617 821 C 589 811 599 780 626 792 Z","M 716 543 Q 767 618 768 618 Q 781 628 773 639 Q 764 648 743 657 Q 727 664 707 655 Q 685 646 656 638 Q 628 629 578 624 Q 568 623 565 618 Q 562 614 575 608 Q 602 598 637 608 Q 685 624 693 625 Q 706 624 703 608 Q 693 577 678 552 L 655 527 Q 616 497 552 480 Q 542 479 549 471 Q 601 456 683 509 Q 684 512 688 513 L 716 543 Z","M 688 513 Q 725 497 758 478 Q 770 469 780 468 Q 789 467 791 480 Q 792 490 783 507 Q 776 526 736 538 Q 727 541 716 543 L 678 552 Q 588 570 579 566 Q 575 565 578 557 Q 578 554 655 527 L 688 513 Z","M 546 379 Q 669 391 845 390 Q 929 387 935 398 Q 939 408 924 422 Q 873 461 838 453 Q 625 411 112 357 Q 93 356 107 339 Q 120 326 137 320 Q 158 314 173 319 Q 285 350 411 364 L 444 368 Q 477 374 515 376 L 546 379 Z","M 336 279 Q 327 288 304 297 Q 295 301 285 297 Q 279 293 285 282 Q 286 276 289 270 Q 308 231 299 79 Q 283 7 315 -36 Q 325 -46 334 -36 Q 343 -21 344 1 L 345 32 Q 345 140 346 248 C 346 271 346 271 336 279 Z","M 639 20 Q 667 -17 686 -52 Q 693 -68 705 -69 Q 720 -68 736 -37 Q 754 -1 752 43 Q 748 109 744 229 Q 743 259 759 280 Q 768 292 759 302 Q 741 321 691 344 Q 675 353 659 344 Q 619 328 571 315 L 530 306 Q 508 302 483 297 Q 471 296 461 293 L 421 287 Q 366 281 336 279 C 306 277 316 244 346 248 Q 362 249 391 255 Q 404 258 419 260 L 457 267 Q 491 274 529 281 L 565 288 Q 655 309 680 290 Q 695 278 689 107 Q 688 62 684 48 Q 678 29 661 39 C 632 34 629 33 639 20 Z","M 411 364 Q 414 358 417 354 Q 424 347 421 287 L 419 260 Q 416 232 388 166 Q 384 162 383 157 Q 382 150 389 152 Q 402 152 437 207 Q 437 210 438 210 Q 447 232 457 267 L 461 293 Q 462 299 463 304 Q 467 352 468 352 Q 458 362 444 368 C 417 381 396 390 411 364 Z","M 571 315 Q 575 330 581 345 Q 585 357 578 365 Q 568 372 546 379 C 518 389 514 390 515 376 Q 511 372 519 361 Q 531 346 530 306 L 529 281 Q 529 260 528 236 Q 525 196 543 183 Q 556 170 624 172 Q 651 173 660 185 Q 667 194 662 200 Q 658 206 591 210 Q 549 213 564 281 Q 564 285 565 288 L 571 315 Z","M 411 111 Q 396 108 413 94 Q 420 88 437 89 Q 516 96 574 99 Q 595 100 588 113 Q 581 126 558 132 Q 543 135 411 111 Z","M 344 1 Q 348 0 359 1 Q 449 16 639 20 C 669 21 685 21 661 39 Q 649 48 636 57 Q 623 67 593 62 Q 455 40 345 32 C 315 30 314 2 344 1 Z"],"開":["M 251 738 Q 226 759 197 768 Q 187 771 180 761 Q 176 755 184 743 Q 226 644 209 358 Q 208 352 208 345 Q 202 257 173 169 Q 164 141 169 120 Q 179 83 191 69 Q 204 54 214 69 Q 250 111 251 329 Q 251 411 253 494 L 254 526 Q 254 569 256 601 L 258 636 Q 261 687 265 712 Q 264 713 266 713 C 268 725 268 725 251 738 Z","M 359 509 Q 360 508 362 505 Q 384 474 405 500 Q 415 513 426 581 Q 430 677 456 713 Q 468 731 454 745 Q 436 761 406 777 Q 390 783 375 776 Q 317 754 251 738 C 222 731 237 705 266 713 Q 359 741 376 732 Q 385 728 382 700 Q 373 550 365 537 C 358 511 358 511 359 509 Z","M 256 601 Q 302 613 338 620 Q 360 626 350 637 Q 338 650 314 651 Q 292 651 258 636 C 230 624 227 593 256 601 Z","M 253 494 Q 260 493 268 495 Q 298 504 359 509 C 389 512 390 521 365 537 Q 359 541 351 545 Q 335 552 308 543 Q 278 533 254 526 C 225 518 223 496 253 494 Z","M 642 787 Q 620 806 595 815 Q 588 818 583 813 Q 574 809 583 797 Q 607 748 605 620 Q 599 563 633 529 Q 634 529 636 527 Q 652 520 657 550 Q 657 551 657 554 L 658 587 Q 655 620 655 653 L 655 680 Q 656 722 659 755 C 660 772 660 772 642 787 Z","M 817 567 Q 826 113 802 72 Q 796 65 776 70 Q 751 74 724 79 Q 703 85 704 75 Q 762 26 794 -9 Q 809 -28 825 -34 Q 835 -38 843 -27 Q 885 21 883 82 Q 870 308 868 675 Q 867 736 881 764 Q 894 783 881 795 Q 859 814 819 830 Q 800 837 784 831 Q 733 801 642 787 C 612 782 630 749 659 755 Q 666 756 677 759 Q 726 769 772 781 Q 791 785 799 775 Q 814 762 813 714 Q 814 653 816 595 L 817 567 Z","M 655 653 Q 656 653 660 653 Q 718 663 760 668 Q 782 672 773 685 Q 763 698 739 701 Q 697 704 655 680 C 629 665 625 653 655 653 Z","M 657 554 Q 661 554 668 555 Q 714 564 817 567 C 847 568 839 575 816 595 Q 812 599 804 604 Q 789 613 760 606 Q 703 593 658 587 C 628 583 627 552 657 554 Z","M 565 435 Q 565 436 566 436 Q 609 443 643 449 Q 652 448 658 459 Q 659 468 640 476 Q 616 492 546 469 Q 531 466 516 461 Q 491 455 366 431 Q 344 427 362 414 Q 386 398 403 398 L 436 406 Q 476 418 527 427 L 565 435 Z","M 594 311 Q 642 318 703 319 Q 749 319 756 328 Q 760 338 746 348 Q 695 382 638 362 Q 617 358 595 351 L 545 340 Q 535 340 464 325 L 420 317 Q 368 310 313 299 Q 297 296 310 283 Q 334 262 377 272 Q 396 278 419 283 L 462 292 Q 492 299 545 306 L 594 311 Z","M 403 398 Q 419 382 420 317 L 419 283 Q 416 199 357 140 Q 347 130 344 125 Q 343 121 352 120 Q 403 126 440 197 Q 440 198 441 200 Q 456 239 462 292 L 464 325 Q 467 364 470 374 Q 474 390 458 397 Q 446 403 436 406 C 408 416 386 423 403 398 Z","M 545 306 Q 546 254 546 185 Q 547 74 560 58 Q 564 54 570 55 Q 576 58 581 70 Q 594 107 592 189 Q 591 217 594 311 L 595 351 Q 595 352 596 353 Q 596 362 602 397 Q 605 410 593 419 Q 577 429 565 435 C 539 449 515 454 527 427 Q 527 424 530 420 Q 539 405 545 349 Q 544 345 545 340 L 545 306 Z"],"雖":["M 202 698 Q 192 704 162 708 Q 152 709 148 705 Q 144 701 151 686 Q 176 637 195 554 Q 198 530 213 514 Q 229 495 234 509 Q 235 518 236 530 L 233 561 Q 218 642 213 670 C 209 695 209 695 202 698 Z","M 377 581 Q 401 657 425 677 Q 447 702 426 716 Q 407 728 381 745 Q 363 757 318 731 Q 263 709 202 698 C 173 692 184 664 213 670 Q 220 671 232 674 Q 278 687 318 696 Q 346 703 352 692 Q 359 686 349 655 Q 339 625 328 589 C 319 560 368 552 377 581 Z","M 268 535 Q 305 545 383 555 Q 393 556 393 565 Q 393 571 377 581 L 328 589 Q 324 589 320 587 Q 272 571 233 561 C 204 553 206 529 236 530 Q 237 530 240 530 L 268 535 Z","M 150 397 Q 137 401 115 402 Q 105 403 102 399 Q 98 393 106 381 Q 133 339 154 267 Q 158 245 173 232 Q 191 216 193 229 Q 194 235 194 242 L 190 273 Q 187 276 165 369 C 159 395 159 395 150 397 Z","M 414 316 Q 435 379 464 398 Q 477 414 466 428 Q 453 438 409 459 Q 394 466 376 458 Q 337 442 304 430 L 260 419 Q 205 406 150 397 C 120 392 136 362 165 369 Q 237 387 261 392 L 304 402 Q 373 423 388 412 Q 394 405 392 391 Q 385 357 376 327 C 368 298 404 288 414 316 Z","M 301 267 Q 350 280 419 291 Q 429 292 429 301 Q 429 307 414 316 C 393 330 393 330 376 327 Q 361 326 302 304 L 261 291 Q 222 281 190 273 C 161 266 165 236 194 242 Q 197 242 261 258 L 301 267 Z","M 300 175 Q 301 223 301 267 L 302 304 Q 302 356 304 402 L 304 430 Q 304 457 306 484 Q 312 500 304 509 Q 285 527 268 535 C 242 550 230 556 240 530 Q 240 529 242 524 Q 260 482 260 419 L 261 392 Q 261 353 261 291 L 261 258 Q 261 216 261 162 C 261 132 299 145 300 175 Z","M 401 210 Q 352 194 300 175 L 261 162 Q 197 144 133 123 Q 112 116 78 117 Q 65 116 62 104 Q 61 91 70 82 Q 94 66 128 47 Q 138 44 151 53 Q 194 84 241 107 Q 314 138 385 171 Q 401 180 416 188 C 442 202 429 219 401 210 Z","M 416 188 Q 446 142 456 139 Q 463 138 470 145 Q 476 155 475 177 Q 475 204 403 249 Q 393 255 388 254 Q 384 253 382 243 Q 383 234 397 215 Q 398 214 401 210 L 416 188 Z","M 533 554 Q 540 566 550 577 Q 590 628 634 707 Q 652 743 668 761 Q 677 771 671 784 Q 667 796 639 815 Q 612 831 595 829 Q 577 826 587 806 Q 609 764 533 627 Q 499 564 448 493 Q 439 483 438 477 Q 435 467 448 470 Q 463 474 511 526 L 533 554 Z","M 580 173 Q 580 405 589 464 Q 596 491 587 502 Q 568 523 555 537 Q 545 549 533 554 C 508 570 501 554 511 526 Q 515 510 524 497 Q 563 425 534 193 Q 525 133 510 71 Q 500 26 534 -25 Q 535 -25 537 -28 Q 555 -44 567 -17 Q 582 23 581 70 Q 580 110 580 147 L 580 173 Z","M 723 681 Q 745 662 770 638 Q 783 626 798 627 Q 808 628 813 640 Q 817 655 808 683 Q 798 710 717 727 Q 702 730 696 727 Q 692 723 693 711 Q 697 701 723 681 Z","M 750 520 Q 898 565 901 566 Q 908 573 904 581 Q 897 591 869 597 Q 847 600 759 567 Q 680 546 642 539 Q 609 532 634 517 Q 665 502 714 510 L 750 520 Z","M 775 406 Q 820 416 860 424 Q 882 428 873 441 Q 863 454 839 457 Q 817 458 778 446 Q 777 446 776 445 L 728 430 Q 685 417 646 405 Q 630 401 650 387 Q 657 381 729 395 L 775 406 Z","M 771 291 Q 820 303 867 311 Q 891 315 881 328 Q 871 343 845 346 Q 808 350 772 333 L 729 319 Q 683 306 643 293 Q 627 289 647 275 Q 654 271 729 282 L 771 291 Z","M 769 206 Q 770 251 771 291 L 772 333 Q 773 372 775 406 C 777 436 774 433 776 445 Q 776 446 777 446 Q 780 494 777 499 Q 764 512 750 520 C 725 536 701 537 714 510 Q 727 488 728 430 L 729 395 Q 729 365 729 319 L 729 282 Q 729 245 729 199 C 729 169 768 176 769 206 Z","M 729 199 Q 659 189 580 173 C 551 167 553 159 580 147 Q 610 132 632 139 Q 755 176 954 176 Q 972 177 976 185 Q 980 195 965 207 Q 913 243 865 227 Q 825 218 769 206 L 729 199 Z"],"餘":["M 185 539 Q 228 588 274 657 L 281 667 Q 302 706 331 746 L 341 760 Q 348 770 356 776 Q 365 786 361 798 Q 357 810 331 832 Q 306 848 288 849 Q 270 848 278 827 Q 291 796 279 770 Q 219 629 55 437 Q 45 427 43 421 Q 39 411 53 413 Q 80 417 167 517 L 185 539 Z","M 331 746 Q 335 739 357 727 Q 397 706 442 681 Q 452 674 464 676 Q 471 677 474 688 Q 475 700 464 719 Q 452 749 347 761 Q 343 761 341 760 C 322 756 322 756 331 746 Z","M 274 657 Q 274 656 275 654 Q 278 647 299 634 Q 324 618 349 599 Q 359 592 371 593 Q 378 594 382 604 Q 383 616 374 636 Q 368 651 343 659 Q 292 671 281 667 C 271 665 271 665 274 657 Z","M 324 318 Q 342 293 357 286 Q 367 279 379 299 Q 392 324 413 457 Q 419 484 438 506 Q 448 516 438 528 Q 425 541 387 561 Q 375 567 327 551 Q 296 544 226 517 C 198 506 216 480 244 492 Q 244 493 246 493 Q 342 532 356 523 Q 371 513 368 494 Q 353 371 341 348 C 330 320 320 323 324 318 Z","M 240 393 Q 286 406 323 415 Q 342 421 334 430 Q 324 440 302 442 Q 269 442 239 422 C 214 406 211 385 240 393 Z","M 239 295 Q 285 308 324 318 C 353 325 370 340 341 348 Q 317 357 240 321 C 213 308 210 287 239 295 Z","M 335 211 Q 323 205 244 155 Q 237 149 235 158 Q 238 231 239 295 L 240 321 Q 240 358 240 393 L 239 422 Q 238 456 243 485 Q 244 489 244 492 C 246 502 246 502 226 517 Q 199 539 185 539 C 157 549 155 545 167 517 Q 210 433 191 195 Q 190 149 155 101 Q 145 85 152 65 Q 162 40 175 30 Q 188 23 198 39 Q 213 67 348 192 C 370 212 361 226 335 211 Z","M 348 192 Q 360 165 381 160 Q 391 157 398 171 Q 401 181 397 197 Q 391 215 371 228 Q 340 252 326 257 Q 319 260 317 251 Q 314 245 319 237 Q 326 224 335 211 L 348 192 Z","M 651 712 Q 682 796 683 797 Q 679 807 665 815 Q 629 839 597 825 Q 588 821 593 809 Q 623 743 540 580 Q 536 574 533 568 Q 508 522 439 428 Q 432 421 443 421 Q 486 430 577 558 Q 611 618 642 689 L 651 712 Z","M 642 689 Q 714 592 795 499 Q 816 475 853 472 Q 920 465 993 474 Q 1011 475 1013 480 Q 1016 486 1001 492 Q 824 571 823 572 Q 753 620 702 665 Q 668 699 651 712 C 628 731 624 713 642 689 Z","M 622 427 Q 662 440 709 452 Q 734 459 737 464 Q 744 471 739 478 Q 732 488 707 492 Q 682 495 656 483 Q 628 471 598 461 Q 564 451 525 445 Q 494 438 518 424 Q 546 412 586 417 L 622 427 Z","M 654 303 Q 708 313 794 318 Q 836 318 841 328 Q 845 338 830 348 Q 779 381 726 359 Q 695 352 655 340 L 602 328 Q 535 315 461 299 Q 445 296 457 283 Q 481 265 526 275 Q 560 285 603 293 L 654 303 Z","M 603 293 Q 604 223 607 108 Q 606 80 598 70 Q 595 70 540 75 Q 530 79 529 72 Q 529 65 538 56 Q 581 13 607 -20 Q 617 -29 630 -15 Q 660 33 662 120 Q 655 223 654 303 L 655 340 Q 659 395 657 402 Q 650 414 622 427 C 595 441 577 446 586 417 Q 601 372 602 354 Q 602 342 602 328 L 603 293 Z","M 485 210 Q 461 173 433 141 Q 409 114 423 81 Q 427 65 448 73 Q 496 98 501 155 Q 510 183 506 208 Q 502 215 497 217 Q 490 217 485 210 Z","M 721 207 Q 773 164 835 100 Q 851 81 866 78 Q 873 77 881 87 Q 891 100 879 141 Q 864 195 721 236 Q 712 240 711 229 Q 711 216 721 207 Z"]};

 var timeoutID = null;
 var seconds = 0;
 var score = 100;
 var msg = "";


var colors = ["red", "orange", "purple"];
var characters = ['開', '務', '餘', '廣', '雖', '醫', '術', '殺'];
var answers = [[0,1],[0,1],[0,1],[1,0],[1,0],[1,0,0],[0,1,0],[1,0]];

//every character has a 2D array containing the starting and ending strokes of its radicals
var answer_key = {"開":[0,1], "務":[0,1], "餘":[0,1], "廣":[1,0], "雖":[1,0], "醫":[1,0,0], "術":[0,1,0], "殺":[1,0]};


var radicals = {"開": [[0,7], [8,11]], "務": [[0,4], [5,10]], "餘": [[0,7],[8,14]], "廣": [[0,2], [3,14]], "雖":[[0,8], [9,16]], "醫":[[0,6], [7,10], [11,17]], "術":[[0,2], [3,7], [8,10]], "殺":[[0,5], [6,9]]};

var user_answers = [];


function start(){
	
	user_answers = [];
//   characters = shuffle(characters);
    clearInterval();
    clearTimeout(timeoutID);
    //reset time
    timeoutID = null;
    seconds = 0;
    score = 100;
    msg = "";
    	
     document.getElementById("timer").style.display = "inline";   
     document.getElementById("timer2").style.display = "none";   
    

     document.getElementById("sco").innerHTML = "";

    if (document.getElementById("start_redo")){
        document.getElementById("start_redo").remove(); 
    }
    
    //reset check div
    var check_div = document.getElementById("check_div");
    ////console.log(check_div);
    if (check_div.innerHTML == ""){
        check_div.innerHTML += "<input type='button' id='btn_check' name='done' value='Check' onclick='result()'> ";
    }
    
    //filling user_answers double array with choice 0's because nothing is selected
    
    for(var c=0; c<characters.length; c++){
        var rads = radicals[characters[c]];
        var rad_choices = [];
            for (var i=0; i<rads.length;i++){
                rad_choices.push(0);
            }
            user_answers.push(rad_choices);
    }
    
	var first_id = characters[0] + "0";
    var text = "<g class='radical_group' id='" + first_id + "' rad=0 selected=0>";
    var x = 1000;
    var y = 1000;
    var down = -900;
    var right = 0;
    var current_radical = 0;
    var prev_radical = 0;
    var current_color = "orange";
    
    
    for (var c=0; c<characters.length; c++){
    ////console.log(strokes[characters[c]]);
        var str = "";
        //loops through dictionary of paths 
        for (var s=0; s < strokes[characters[c]].length; s++ ){
    
            //uses radicals dictionary and character key to find the radical group the stroke belongs to
            var rads = radicals[characters[c]];
            
            for (var i=0; i<rads.length;i++){
                //console.log(characters[c]);
                if (s >= rads[i][0] && s <= rads[i][1]){
                        current_radical = i;
                        break;
                }
            }  
            
            if (current_radical != prev_radical){
                //unique identifier for every radical group
                var id = characters[c] + current_radical;
                text += "</g> <g class= 'radical_group' id='" + id + "'";
                text += "selected = 0 ";
                text += "rad=" + current_radical + ">";
            }
            
            //adds character class to each <g> tag   
            text += " <g class='"+ [characters[c]] +"' id='" + s + "'";
            
            //groups each radical based on current_radical
            text +=  "group ='" + current_radical + "'";  
            text += " class='a_stroke' transform='scale(.4, -.4) translate(" + right + "," + down + ")' >"; 
            
            //SVG path from dictionary
            text += "<path d='" + strokes[characters[c]][s] + "' ";
            
            //text += "fill='" + colors[current_radical]  + "'" ;
            text +=  "/> </g>";
            
            
            //sets previous radical to current
            prev_radical = current_radical;  
        }   
        
        
    if (right+1000 < 5000){
    right += 1500;
     down -= 0;  
    }
        else {
            right = 0;
            down -= 1500;  
        }
      
    }
       game = document.getElementById("game");
    
       game.innerHTML =  "<svg height='200px' width='600px' version='1.1' viewBox=' 500 0 " + x + ' ' + y + "' xmlns='http://www.w3.org/2000/svg'>" + text + "</svg>";   
    
        countTime();
        click();
}

function click(){
 $(".radical_group").click(function(){     
    
     var rad = this.getAttribute("rad");
     var char = this.id[0]; 
     var rad_group = document.getElementById(this.id);
     
	
     
     //checks if the radical was already selected
     var isSelected = rad_group.getAttribute("selected");
     var g_tags = rad_group.getElementsByTagName("g");
     
    //index of character in char array and answer array
    var answer_index = characters.indexOf(char);
	//console.log(user_answers[answer_index]);
	
     
     //if not seelcted, change colors and set selected to true
     if (isSelected == 0) {
          user_answers[answer_index][rad] = 1;
          rad_group.setAttribute("selected", 1);
          set_col(this.id);
      
	 
		//now deselect all the others, and change ans to 0 (F)
		 for (var p=0; p<user_answers[answer_index].length; p++){
			 //leave as 1
			 if (p==rad){}
			 else {
				 deselect_id = char + (parseInt(p));
				 deselect = document.getElementById(deselect_id); 
				 var rad_group = document.getElementById(deselect_id);
				 user_answers[answer_index][p] = 0;
				 rad_group.setAttribute("selected", 0);
	     		 set_default(deselect_id);	  
			 }
		 } //end p loop
	 
	 } //end isSelected == 0
});
}

function set_col(id){
	var rad_group = document.getElementById(id);
	var g_tags = rad_group.getElementsByTagName("g");
	 for (var i=0; i<g_tags.length; i++){
        //setting the path (firstChild) of each group to the appropriate color in the list
         g_tags[i].firstChild.setAttribute("fill", "purple")
        }    
     };

function set_default(id){
	var rad_group = document.getElementById(id);
	var g_tags = rad_group.getElementsByTagName("g");
	 for (var i=0; i<g_tags.length; i++){
        //setting the path (firstChild) of each group to the appropriate color in the list
         g_tags[i].firstChild.setAttribute("fill", "bla")
        }    
     };



function result(){
    //console.log("running...");
    var right = 70;
    var down = 0;
    var correct = 0;
    for (var c=0; c < user_answers.length; c++){
        var char = characters[c];
        
        //console.log(char);
      
        //console.log(down);
        
			
			//console.log(char+"0");
            var g =  document.getElementById(char+"0");
            var path = g.children[0];
            
         
            var transform = "scale(6,6)" + "translate(" + right +","+ down + ")";
            
            //creating new g with same translate, diff scale
            var check = document.createElementNS("http://www.w3.org/2000/svg", "g");
            check.setAttribute("transform", transform);
            
            //creating new path for the check
            var new_path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        
    
        //comparing two arrays in js doesn't work without JSON.stringify
        if (JSON.stringify(user_answers[c]) == JSON.stringify(answer_key[char])){
            
            //log correctness
            correct += 1;
            //add an svg checkmark :)
            new_path.setAttribute("d", " M0 12.116l2.053-1.897c2.401 1.162 3.924 2.045 6.622 3.969 5.073-5.757 8.426-8.678 14.657-12.555l.668 1.536c-5.139 4.484-8.902 9.479-14.321 19.198-3.343-3.936-5.574-6.446-9.679-10.251z")
            new_path.setAttribute("fill", "green");
            ; 
        }
        
        //append x mark :(
        else {
            new_path.setAttribute("d", "M24 3.752l-4.423-3.752-7.771 9.039-7.647-9.008-4.159 4.278c2.285 2.885 5.284 5.903 8.362 8.708l-8.165 9.447 1.343 1.487c1.978-1.335 5.981-4.373 10.205-7.958 4.304 3.67 8.306 6.663 10.229 8.006l1.449-1.278-8.254-9.724c3.287-2.973 6.584-6.354 8.831-9.245z" );
            new_path.setAttribute("fill", "red");
        }
            check.appendChild(new_path);
            g.appendChild(check);
            
        if (right+100 > 380){
                right = 70;
                down += 100;
            }
        else {
                right += 100;
            }
                
    }
    
    
    //----------------------------------------------------------------------------------
      //only add text if it's empty
    if (this.document.getElementById("sco").innerHTML == ""){
           getTimeSpent();
         //console.log("total_correct: " + correct);
        var length=characters.length;
        correct = Math.round((correct/length)* 100);
        this.document.getElementById("sco").innerHTML += "Score: " + correct + " %";  
 }
    document.getElementById('check_div').innerHTML = '<button type="button" id="start_redo" value="Redo" font-size:36px;height:50px; width:170px onclick="start()"> Redo </button>';
    $(".radical_group").off("click");
}

//--------------------------------------------------------------------------------
	
	/*
     
     //used to select another radical if clicked radical was already selected
     else if (isSelected == 1) {
		 //deselect this element
		 rad_group.setAttribute("selected", 0);
         user_answers[answer_index][p] = 0;
		 set_default(this.id);
	 
		 //selecting new element
		 //trying element below first
		 var other_selection_id = char + (parseInt(rad)-1);
		 var o_s = document.getElementById(other_selection_id);
		 //changing to element above if it doesn't work
		 if (o_s == null){
			 other_selection_id = char + (parseInt(rad)+1);
			 o_s = document.getElementById(other_selection_id);
			 user_answers[answer_index][rad+1] = 1;
		 }
		 else {
		 user_answers[answer_index][rad-1] = 1;
		 }
		 var rad_group = document.getElementById(other_selection_id);
		 rad_group.setAttribute("selected", 1);
	     set_col(other_selection_id);	
	 }
	 */
    
 //-------------------------------------------------------------------------------   
  