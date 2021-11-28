from django.db import models
from django.contrib.auth.models import AbstractUser
from . import choices


#########################
# AUTHENTICATION SYSTEM #
#########################


class User(AbstractUser):
    phone_number = models.CharField(max_length=12, blank=True)
    device_id = models.CharField(max_length=32, blank=True)  # For use by android team
    is_banned = models.BooleanField(
        default=False
    )  # To check whether the user is banned
    is_student = models.BooleanField(
        default=True
    )  # to check whether the user is student
    is_teacher = models.BooleanField(
        default=False
    )  # to check whether the user is teacher


class StudentProfile(User): # User
    # user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    division = models.CharField(max_length=8, default="A")
    department = models.CharField(max_length=32, blank=True)
    admission_year = models.PositiveSmallIntegerField(null=True)

    class Meta:
        verbose_name = "Student"
        verbose_name_plural = "Students"


class TeacherProfile(User):
    # user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    floor = models.PositiveSmallIntegerField(null=True)
    department = models.CharField(max_length=32, null=True)

    class Meta:
        verbose_name = "Teacher"
        verbose_name_plural = "Teachers"


#####################
# CUSTOMIZABLE MENU #
#####################


class Category(models.Model):
    name = models.CharField(max_length=256, blank=True)

    def __str__(self):
        return self.name


class MenuItem(models.Model):
    name = models.CharField(max_length=20, null=False, blank=False, unique=True)
    price = models.PositiveIntegerField(blank=False, null=False)
    is_available = models.BooleanField(default=True)
    preparation_time = models.TimeField(blank=True, null=True)
    options = models.CharField(
        max_length=16, choices=choices.MENU_ITEM_CHOICES, default="ALL"
    )
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='menuImages/',
        max_length=254, blank=True, null=True
    )

    def __str__(self):
        return self.name


###################
# ORDERING SYSTEM #
###################


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    is_fulfilled = models.BooleanField(default=False)
    time_issued = models.DateTimeField(auto_now_add=True)
    time_sheduled = models.DateTimeField(null=True)
    time_prepared = models.DateTimeField(null=True)
    time_delivered = models.DateTimeField(null=True)
    
    # payment_choices = models.CharField(
    #     max_length=8, choices=choices.PAYMENT_MODE_CHOICES, default="COD"
    # )
    # status = models.SmallIntegerField(choices=choices.STATUS_CHOICES, default=0)
    # transaction_id = models.CharField(max_length=256, blank=True, default="")

    def __str__(self):
        return "{}|{}".format(self.id, self.user.username)


class OrderItem(models.Model):
    menu_item = models.ForeignKey(MenuItem, on_delete=models.CASCADE)
    order = models.ForeignKey(Order, related_name="items", on_delete=models.CASCADE)
    options = models.CharField(
        max_length=8, choices=choices.MENU_ITEM_CHOICES, default="NON JAIN"
    )
    quantity = models.SmallIntegerField()
    comment = models.TextField(blank=True)

    def __str__(self):
        return "{} | {} x{}".format(self.order.id, self.menu_item, self.quantity)


##################
# BILLING SYSTEM #
##################


class Bill(models.Model):
    order = models.OneToOneField(Order, on_delete=models.CASCADE, primary_key=True)
    total_amount = models.IntegerField(default=0)
    # tax = models.IntegerField(null=True)
    # transaction_fees = models.IntegerField(null=True)
    # bill_no = models.CharField(max_length=256, default="XXXX")

    def __str__(self):
        return "Bill #{} for Order #{}".format(self.bill_no, self.order.id)
