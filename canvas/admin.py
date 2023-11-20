from django.contrib import admin
from .models import Todo

class CanvasAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')


# Register your models here.
admin.site.register(Todo, CanvasAdmin)
