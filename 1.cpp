// addition_test.c

#include <stdio.h>

int main() {
    int result = 2 + 3;
    if (result == 5) {
        printf("Phép 2 + 3 b?ng 5: Ki?m tra thành công!\n");
        return 0;
    } else {
        printf("Phép 2 + 3 không b?ng 5: Ki?m tra th?t b?i!\n");
        return 1;
    }
}

